import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/contents/options";
import axios from "axios";
import { toast } from "sonner";
import { chatSession } from "@/services/AiModel";
import DialogPopup from "@/components/custom/Dialog";
import { useGoogleLogin } from "@react-oauth/google";
import Header from "@/components/custom/Header";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/services/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const [dialog, setDialog] = useState(false);
  const [place, setPlace] = useState("");
  const [day, setDay] = useState(0);
  const [people, setPeople] = useState({});
  const [budget, setBudget] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(place);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

  const handlePlaceChange = async (e) => {
    const input = e.target.value;
    setPlace(input);
    if (input.length > 2) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=5`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.log("Error fetching location suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSelectedPlace(suggestion.display_name);
    setPlace(suggestion.display_name);
    setSuggestions([]);
  };

  const handleTripData = () => {
    if (!place) {
      return toast("Please select a valid destination.");
    }
    if (day > 7 || day < 1) {
      return toast("Please select a valid number of days (1 to 7).");
    }
    if (!people.id) {
      return toast("Please select who you will be traveling with.");
    }
    if (!budget.id) {
      return toast("Please select a budget.");
    }
    generateTrip();
  };

  const login = useGoogleLogin({
    clientId: import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID,
    onSuccess: (codeRes) => {
      getUserProfile(codeRes);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        generateTrip();
        setDialog(false);
      });
  };

  const generateTrip = async () => {
    setLoading(true);
    let user = localStorage.getItem("user");
    if (!user) {
      setDialog(true);
      return;
    }

    const finalPrompt = AI_PROMPT.replace("{location}", selectedPlace)
      .replace("{day}", day)
      .replace("{traveler}", people?.people)
      .replace("{budget}", budget?.title)
      .replace("{day}", day);

    const response = await chatSession.sendMessage(finalPrompt);
    setLoading(false);
    svaeTripData(JSON.parse(response?.response?.text()));
  };

  const svaeTripData = async (tripData) => {
    try {
      setLoading(true);
      const userSelection = {
        location: place,
        people: people.people,
        budget: budget.title,
        day,
      };
      const docId = Date.now().toString();
      const user = JSON.parse(localStorage.getItem("user"));
      await setDoc(doc(db, "AiTrip", docId), {
        userSelection,
        tripData,
        userEmail: user?.email,
        id: docId,
      });
      console.log(tripData);
      
      setLoading(false);
      router("/view-trip/" + docId);
    } catch (error) {
      setLoading(false);
      toast(error.message);
    }
  };

  return (
    <>
      <Header setDialog={setDialog} />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
              Plan Your Dream Trip
            </h1>
            <p className="text-lg text-gray-600">
              Provide some details about your trip, and we’ll craft a customized
              itinerary just for you.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Where are you going?
            </h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter destination"
                className="border rounded-md w-full px-4 py-2"
                value={place}
                onChange={handlePlaceChange}
              />
              {suggestions.length > 0 && (
                <ul className="absolute bg-white border rounded-md mt-1 w-full shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-3 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSelectSuggestion(suggestion)}
                    >
                      {suggestion.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              How many days are you planning for your trip?
            </h2>
            <Input
              type="number"
              placeholder="Number of days"
              className="border rounded-md w-full px-4 py-2"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Select Your Budget</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SelectBudgetOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer text-center ${
                    option.id === budget?.id
                      ? "border-purple-600"
                      : "border-gray-300"
                  } hover:border-purple-600 transition`}
                  onClick={() => setBudget(option)}
                >
                  <div className={`text-4xl mb-3 ${option.color}`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Who are you traveling with?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SelectTravelList.map((option) => (
                <div
                  key={option.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer text-center ${
                    option.id === people?.id
                      ? "border-purple-600"
                      : "border-gray-300"
                  } hover:border-purple-600 transition`}
                  onClick={() => setPeople(option)}
                >
                  <div className={`text-4xl mb-3 ${option.color}`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              disabled={loading}
              className="px-8 py-3 font-semibold bg-purple-600 text-white rounded-lg shadow-lg"
              onClick={handleTripData}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
              ) : (
                "Generate Trip"
              )}
            </Button>
          </div>
        </div>
      </div>
      <DialogPopup dialog={dialog} setDialog={setDialog} login={login} />
    </>
  );
};

export default CreateTrip;

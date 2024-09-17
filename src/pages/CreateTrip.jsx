import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/contents/options";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { chatSession } from "@/services/AiModel";
import DialogPopup from "@/components/custom/Dialog";
import { useGoogleLogin } from "@react-oauth/google";

const CreateTrip = () => {
  const [dialog, setDialog] = useState(false);
  const [place, setPlace] = useState("");
  const [day, setDay] = useState(0);
  const [people, setPeople] = useState({});
  const [budget, setBudget] = useState({});
  const [suggestions, setSuggestions] = useState([]); // For storing location suggestions
  const [selectedPlace, setSelectedPlace] = useState(place); // For storing the selected place

  // Handle input change and fetch location suggestions
  const handlePlaceChange = async (e) => {
    const input = e.target.value;
    setPlace(input);

    if (input.length > 2) {
      // Fetch suggestions from Nominatim API
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=5`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.log("Error fetching location suggestions:", error);
      }
    } else {
      setSuggestions([]); // Clear suggestions if input length is less than 3
    }
  };

  // Handle selecting a place from the suggestions
  const handleSelectSuggestion = (suggestion) => {
    setSelectedPlace(suggestion.display_name);
    setPlace(suggestion.display_name);
    setSuggestions([]); // Clear suggestions after selection
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

    // If all validations pass
    generateTrip();
  };

  // Login User
  const login = useGoogleLogin({
    clientId: import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID,
    onSuccess: (codeRes) => {
      getUserProfile(codeRes)
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // Get User Info
  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: "Bearer ${tokenInfo?.access_token}",
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("user",JSON.stringify(res.data))
        generateTrip()
        setDialog(false)
      });
  };
  // generate trip
  const generateTrip = async () => {
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

    console.log(JSON.parse(response?.response?.text()));
  };

  return (
    <div className="p-3">
      <div className="w-full md:w-8/12 m-auto py-5">
        <div className="my-5">
          <h1 className="text-3xl font-bold mb-2">
            Tell us your travel preferences 🏕️🌴
          </h1>
          <p className="text-xl text-gray-500">
            Just provide some basic information, and our trip planner will
            generate a customized itinerary based on your preferences.
          </p>
        </div>
        <div className="mt-16">
          <div className="pt-10 relative">
            <h2 className="text-xl my-3 font-semibold">
              What is your destination of choice?
            </h2>

            <Input
              type="text"
              placeholder="Type your destination here..."
              className="border-2"
              value={place}
              onChange={handlePlaceChange}
            />

            {/* Suggestion Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border mt-1 w-full z-10 shadow-md">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectSuggestion(suggestion)}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-5">
            <h2 className="text-xl my-3 font-semibold">
              How many days are you planning your trip?{" "}
            </h2>

            <Input
              type="number"
              placeholder="Type trip day.."
              className="border-2"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
            />
          </div>

          <div className="pt-10">
            <h2 className="text-xl my-3 font-semibold">What is Your Budget?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {SelectBudgetOptions.map((option) => (
                <div
                  key={option.id}
                  className={`bg-white shadow-md p-6 rounded-sm border-2 hover:border-gray-800 ${
                    option.id === budget?.id ? "border-gray-800" : ""
                  }`}
                  onClick={() => setBudget(option)}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <h2 className="text-xl font-semibold my-2">{option.title}</h2>
                  <p className="text-sm text-gray-500">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-16">
            <h2 className="text-xl my-5 font-semibold">
              Who do you plan on traveling with on your next adventure?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {SelectTravelList.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setPeople(option)}
                  className={`bg-white shadow-md p-6 rounded-sm border-2 hover:border-gray-800 ${
                    option.id === people?.id ? "border-gray-800" : ""
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <h2 className="text-xl font-semibold my-2">{option.title}</h2>
                  <p className="text-sm text-gray-500">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <Button onClick={handleTripData}>Generate Trip</Button>
          </div>
        </div>
      </div>
      <DialogPopup dialog={dialog} login={login} />
    </div>
  );
};

export default CreateTrip;

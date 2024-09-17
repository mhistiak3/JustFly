import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelList } from "@/contents/options";
import { useState } from "react";

const CreateTrip = () => {
  const [place, setPlace] = useState("");
  const [day, setDay] = useState("");
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

        <div className="mt-24">
          <div className="pt-10">
            <h2 className="text-xl my-3 font-semibold">
              What is destination of choice?
            </h2>

            <Input
              type="text"
              placeholder="Type your destination here..."
              className="border-2"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
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
              onChange={(e) => setDay(e.target.value)}
            />
          </div>

          <div className="pt-10">
            <h2 className="text-xl my-3 font-semibold">What is Your Budget?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {SelectBudgetOptions.map((option) => (
                <div
                  key={option.id}
                  className="bg-white shadow-md p-6 rounded-sm border-2 hover:border-gray-800"
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
                  className="bg-white shadow-md p-6 rounded-sm border-2 hover:border-gray-800"
                >
                  <span className="text-2xl">{option.icon}</span>
                  <h2 className="text-xl font-semibold my-2">{option.title}</h2>
                  <p className="text-sm text-gray-500">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>

        <div className="flex justify-end pt-10">
          <Button >
            Generate Trip
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;

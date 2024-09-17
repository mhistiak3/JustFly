import { Input } from "@/components/ui/input";
import { useState } from "react";

const CreateTrip = () => {
  const [place, setPlace] = useState("");
  const [day, setDay] = useState('');
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
          <div className="my-10">
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
          <div className="my-10">
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
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;

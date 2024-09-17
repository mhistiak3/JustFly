import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-75px)]  px-3 bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800">
      <div className="w-full xl:w-6/12 m-auto xl:py-24 py-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-center p-5 font-semibold bg-purple-700 text-white rounded-sm mb-3">
          Discover Your Next Adventure with AI: Personalized Itineraries at Your
          Fingertips
        </h1>
        <p className="text-center py-3 text-md  md:text-xl mb-3 text-white">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to={"/create-trip"}>
          <Button className="bg-white text-gray-700 hover:bg-slate-300 font-semibold">
            Get Started, it's free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

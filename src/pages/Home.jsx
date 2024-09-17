import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900">
      <div className="w-full max-w-3xl text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight shadow-md">
          Discover Your Next Adventure with AI
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 shadow-lg">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to={"/create-trip"}>
          <Button className="mt-4 bg-white text-gray-800 hover:bg-gray-300 hover:shadow-lg transition-all font-semibold py-3 px-6 rounded-lg">
            Get Started, it's free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

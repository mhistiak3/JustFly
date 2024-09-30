import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-purple-500 to-indigo-600 p-6 relative">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bg-white rounded-full opacity-20 w-96 h-96 -top-20 -left-20 animate-pulse"></div>
          <div className="absolute bg-indigo-400 rounded-full opacity-20 w-72 h-72 top-32 right-24 animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center p-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-wide">
            Plan Your Dream Trip with AI
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Let AI customize your itineraries and trip to fit your passions and budget.

          </p>
          <Link to={"/create-trip"}>
            <Button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
              Create a Trip
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

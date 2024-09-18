import React from "react";

const TripInfo = ({ trip }) => {
  const {
    userSelection: { location,people,budget,day },
  } = trip;

  return (
    <div className="my-5">
      <img
        src="/placeholder.png"
        alt="placeholder"
        className="w-full h-[350px] object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2 mt-5">
        <h2 className="text-2xl font-semibold mb-3">{location}</h2>
      </div>
      <div className="flex gap-4 wrap flex-col sm:flex-row">
        <span className="bg-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600">📅{day} Day</span>
        <span className="bg-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600">💰{budget} Budget</span>
        <span className="bg-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600">🧑‍🤝‍🧑Traveler: {people} person </span>
      </div>
    </div>
  );
};

export default TripInfo;

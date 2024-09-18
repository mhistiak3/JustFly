import React from "react";
import { FaMapMarkerAlt, FaTicketAlt, FaClock, FaStar } from "react-icons/fa";

const ItineraryInfo = ({ itinerary }) => {
  return (
    <div className="pt-16 px-4 md:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Places to Visit</h2>
      <div className="py-5">
        {itinerary.map((itina, index) => (
          <div className="mb-10" key={index}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Day: {itina.Day}
            </h3>
            <p className="mb-3 text-purple-600 text-lg">
              <span className="font-semibold">Plan: </span> {itina["Day Plan"]}
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              {itina["Places"].map((place, index) => (
                <div key={index}>
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(
                      place["PlaceName"]
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-sm bg-white border-2 border-gray-200 flex rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                  >
                    <img
                      src={place["Place Image Url"]}
                      onError={(e) => (e.target.src = "/placeholder.png")}
                      alt={place.PlaceName}
                      className="w-[240px] h-60 object-cover"
                    />
                    <div className="p-5">
                      <h4 className="font-semibold text-[18px] text-gray-800 mb-2">
                        {place?.PlaceName}
                      </h4>
                      <p className="text-gray-600 text-[13px] mb-4">
                        {place["Place Details"]}
                      </p>
                      <ul className="space-y-2">
                        <li className="text-sm text-gray-700 flex items-center">
                          <FaClock className="text-purple-500 mr-2" />
                          <span className="font-semibold mr-1">
                            Travel Time:{" "}
                          </span>
                          {place["Time travel"]}
                        </li>
                        <li className="text-sm text-gray-700 flex items-center">
                          <FaTicketAlt className="text-purple-500 mr-2" />
                          <span className="font-semibold mr-1">
                            Ticket Pricing:{" "}
                          </span>{" "}
                          {place["ticket Pricing"]}
                        </li>
                        <li className="text-sm text-gray-700 flex items-center">
                          <FaStar className="text-yellow-400 mr-2" />
                          <span className="font-semibold mr-1">Rating: </span>
                          {place["rating"]}
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryInfo;

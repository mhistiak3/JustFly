import { getImage } from "@/services/GlobalAPI";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelInfo = ({ hotels }) => {
  const [images, setImage] = useState([]);
  async function imageFetch(name) {
    const data = await getImage(name, "hotel");
    const results = data?.data?.results;
    setImage(results);
  }
  useEffect(() => {
    imageFetch(hotels[0]["Hotel address"]);
  },[]);


  return (
    <div className="pt-5">
      <h2 className="text-xl font-bold">Hotel Recomendation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center">
        {hotels.map((hotel, index) => (
          <div className="flex justify-center" key={index}>
            <Link
              to={`https://www.google.com/maps?q=${hotel["HotelName"]},${hotel["Hotel address"]}`}
            >
              <img
                src={images[index]?.links?.download}
                onError={(e) => (e.target.src = "/placeholder.png")}
                alt=""
                className="rounded-lg object-cover h-[200px] w-full"
              />
              <h3 className="text-[18px] font-medium mt-2 mb-1">
                {hotel?.HotelName}
              </h3>
              <p className="text-[12px] mb-2">📍 {hotel["Hotel address"]}</p>
              <div className="flex flex-col gap-1">
                <span className="text-[15px] fonte-medium">
                  💰 {hotel["Price"]}
                </span>
                <span className="text-[15px] fonte-medium">
                  ⭐ {hotel["rating"]}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelInfo;

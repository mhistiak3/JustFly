import Header from "@/components/custom/Header";
import { db } from "@/services/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import TripInfo from "./components/TripInfo";
import HotelInfo from "./components/HotelInfo";
import ItineraryInfo from "./components/ItineraryInfo";

const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  const getTripData = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "AiTrip", tripId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTrip(docSnap.data());
      } else {
        toast("No trip found.");
        navigate("/");
      }
    } catch (error) {
      toast("Error fetching trip data.");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };
console.log(trip);

  useEffect(() => {
    getTripData();
  }, [tripId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <img src={"/spinner.svg"} alt="Loading" className="w-16 h-16" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="w-full h-full">
        <div className="pt-24 p-5 w-full md:w-11/12  lg:w-10/12 xl:w-9/12 m-auto">
          {/* Informaion section */}
          <TripInfo trip={trip} />
          {/* Hotel Section */}
          <HotelInfo hotels={trip?.tripData?.hotels} />

          {/* Trip Day info */}
          <ItineraryInfo itinerary={trip?.tripData?.itinerary} />
        </div>
      </div>
    </>
  );
};

export default ViewTrip;

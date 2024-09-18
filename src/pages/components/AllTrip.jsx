import Header from "@/components/custom/Header";
import { db } from "@/services/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AllTrip = () => {
  const [allTripData, setAllTripData] = useState(null);
  const [loading, setLoading] = useState(false);

 const getAllTripData = async () => {
   try {
     let user = JSON.parse(localStorage.getItem("user"));

     // Check if user exists
     if (!user || !user.email) {
       toast("User not found.");
       return;
     }

     setLoading(true);

     // Fix the typo by removing the space in "userEmail"
     const q = query(
       collection(db, "AiTrip"),
       where("userEmail", "==", user.email)
     );

     const querySnapshot = await getDocs(q);

     if (querySnapshot.empty) {
       toast("No trip found.");
     } else {
       // Extract data from the querySnapshot
       const trips = querySnapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       setAllTripData(trips);
     }
   } catch (error) {
     toast("Error fetching trip data.");
     console.error(error);
   } finally {
     setLoading(false);
   }
 };
  // Call getAllTripData inside useEffect to avoid infinite loop
  useEffect(() => {
    getAllTripData();
    console.log(allTripData);
  }, []); // Empty dependency array ensures it only runs on component mount

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
        <div className="pt-28 p-5 w-full md:w-11/12 lg:w-10/12 xl:w-9/12 m-auto">
          <h2 className="text-3xl font-bold mb-5">Your All Trip</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center">
            {allTripData?.map((trip, index) => (
              <div className="flex justify-center" key={index}>
                <Link to={`/view-trip/${trip.id}`}>
                  <img
                    src="/banner.jpg"
                    alt="placeholder"
                    className="rounded-lg object-cover w-full"
                  />
                  <h3 className="text-[18px] font-medium mt-2 mb-1">
                    {trip?.userSelection.location.slice(0,30)}...
                  </h3>
                  <p className="text-[12px] mb-2">
                    👯 {trip?.userSelection.day} Days with{" "}
                    {trip?.userSelection.budget} Budget
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTrip;

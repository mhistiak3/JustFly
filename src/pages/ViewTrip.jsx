import Header from "@/components/custom/Header";
import { db } from "@/services/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({});
  const navigate = useNavigate()

  const getTripData = async () => {
    const docRef = doc(db, "AiTrip", tripId);
    const docSanp = await getDoc(docRef);
    if (docSanp.exists()) {
      setTrip(docSanp.data());
    } else {
      toast("No trip found.");
      navigate('/')
    }
  };
  useEffect(() => {
    getTripData();
  }, [tripId]);
  return (
    <>
      <Header />
    </>
  );
};

export default ViewTrip;

import axios from "axios";

export const getImage = async (name, place) => {
  const response = await axios(
    `https://api.unsplash.com/search/photos?query=${name},${place}&client_id=${
      import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    }`
  );
  return response
};

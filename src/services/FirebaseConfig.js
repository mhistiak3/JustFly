// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-project-145d0.firebaseapp.com",
  projectId: "ai-project-145d0",
  storageBucket: "ai-project-145d0.appspot.com",
  messagingSenderId: "953899003040",
  appId: "1:953899003040:web:7f6af202c40bdf8926edc5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "medclinic-f57ec.firebaseapp.com",
  projectId: "medclinic-f57ec",
  storageBucket: "medclinic-f57ec.appspot.com",
  messagingSenderId: "176325782662",
  appId: "1:176325782662:web:de091230c25b470626b507"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
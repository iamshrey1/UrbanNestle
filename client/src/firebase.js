// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-f50ec.firebaseapp.com",
  projectId: "mern-f50ec",
  storageBucket: "mern-f50ec.appspot.com",
  messagingSenderId: "489650198585",
  appId: "1:489650198585:web:8ddd2a672b6fd1066e15e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
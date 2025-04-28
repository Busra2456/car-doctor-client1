// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey ,
  authDomain:import.meta.env.VITE_authDomain ,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
  measurementId:import.meta.env.VITE_measurementId 

//   apiKey: "AIzaSyCPVkNLZXbgLkH0DQtIRExAS1iibgwfUiE",
//   authDomain: "car-doctor-client-51c26.firebaseapp.com",
//   projectId: "car-doctor-client-51c26",
//   storageBucket: "car-doctor-client-51c26.firebasestorage.app",
//   messagingSenderId: "578231596630",
//   appId: "1:578231596630:web:77e933e20153d1be0a6df7",
//   measurementId: "G-38RH59L6R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
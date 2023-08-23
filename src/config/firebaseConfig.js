// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtGd_sjLNvD8VHgJpe1MHAodoD1w3heJU",
  authDomain: "adventurelog-a3eaf.firebaseapp.com",
  projectId: "adventurelog-a3eaf",
  storageBucket: "adventurelog-a3eaf.appspot.com",
  messagingSenderId: "22120146749",
  appId: "1:22120146749:web:0273af76399e23a92bc754",
  measurementId: "G-5HD411PMT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
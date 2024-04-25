// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyD5DbV7pB-QTFjGvc3AA2thu2qS4qC115I",
  authDomain: "expatriatebrservices.firebaseapp.com",
  projectId: "expatriatebrservices",
  storageBucket: "expatriatebrservices.appspot.com",
  messagingSenderId: "442798983397",
  appId: "1:442798983397:web:ffb54e85f876995ca46c0c",
  measurementId: "G-BLS926804M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

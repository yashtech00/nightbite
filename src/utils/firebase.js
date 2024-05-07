// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-3j1zOepN3xPirUqGNQorFMiyBNx1UTs",
  authDomain: "nightbite-b8740.firebaseapp.com",
  projectId: "nightbite-b8740",
  storageBucket: "nightbite-b8740.appspot.com",
  messagingSenderId: "374316357687",
  appId: "1:374316357687:web:246bf74cb461e5274687b2",
  measurementId: "G-NRM217FGK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export
    const auth = getAuth();
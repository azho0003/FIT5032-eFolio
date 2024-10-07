// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR3WLHPaO0qrzCW1jOWDOzxgOX92YO24k",
  authDomain: "azho0003-5032.firebaseapp.com",
  projectId: "azho0003-5032",
  storageBucket: "azho0003-5032.appspot.com",
  messagingSenderId: "101945142707",
  appId: "1:101945142707:web:a04187b001489b4d6fafc6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
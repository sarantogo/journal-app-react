// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMlQWeLxk2dtPe2cbQ3KG-uQq6uUArvs8",
  authDomain: "react-journal-app-b9d8c.firebaseapp.com",
  projectId: "react-journal-app-b9d8c",
  storageBucket: "react-journal-app-b9d8c.appspot.com",
  messagingSenderId: "1088179085849",
  appId: "1:1088179085849:web:b0a9351771cdc5bf9e4088",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);

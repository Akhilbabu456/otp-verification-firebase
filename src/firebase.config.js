// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkak2xlQWJfMGVp6f_FK4avaKDXfZUh9A",
  authDomain: "phone-verification-e2e2d.firebaseapp.com",
  projectId: "phone-verification-e2e2d",
  storageBucket: "phone-verification-e2e2d.appspot.com",
  messagingSenderId: "309380402505",
  appId: "1:309380402505:web:2c7b05022cd58df3881e98",
  measurementId: "G-QK62XZLHM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

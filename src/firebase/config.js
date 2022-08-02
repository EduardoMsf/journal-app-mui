// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvsXX0eT55LUCH3teGKiY7qkikATjYeUw",
  authDomain: "journalappmui.firebaseapp.com",
  projectId: "journalappmui",
  storageBucket: "journalappmui.appspot.com",
  messagingSenderId: "860662627887",
  appId: "1:860662627887:web:ca3f803ebfae94531450da"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)

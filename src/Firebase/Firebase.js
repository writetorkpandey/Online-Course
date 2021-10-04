// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4MV-RGHu1HadEatMpBH8K_lWT3zN5rHo",
  authDomain: "tbdtesting-6ce9e.firebaseapp.com",
  databaseURL: "https://tbdtesting-6ce9e-default-rtdb.firebaseio.com",
  projectId: "tbdtesting-6ce9e",
  storageBucket: "tbdtesting-6ce9e.appspot.com",
  messagingSenderId: "388080890107",
  appId: "1:388080890107:web:b980686891572f14fb005e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

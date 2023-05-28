import { initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig: FirebaseOptions = {
  databaseURL: "https://rock-that-breaks-scissors-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyDPuYiK3V8tx9ilEo8QtXJQEyh6EISLBTg",
  authDomain: "rock-that-breaks-scissors.firebaseapp.com",
  projectId: "rock-that-breaks-scissors",
  storageBucket: "rock-that-breaks-scissors.appspot.com",
  messagingSenderId: "1085000172150",
  appId: "1:1085000172150:web:5b9898e2ab0186a53ed557",
  measurementId: "G-DF7FEQFV45",
};

// Initialize Firebase
export const firebaseApp = initializeApp(
  firebaseConfig,
  "rock-that-breaks-scissors"
);
// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDatabase = getDatabase(firebaseApp);

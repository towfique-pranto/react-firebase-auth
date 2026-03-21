// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG9hiOzv_ZIlYHEnDLpjOS5YxFov_lO-w",
  authDomain: "react-firebase-bc0f5.firebaseapp.com",
  projectId: "react-firebase-bc0f5",
  storageBucket: "react-firebase-bc0f5.firebasestorage.app",
  messagingSenderId: "16932734992",
  appId: "1:16932734992:web:507d2a0882db2ae4eda295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
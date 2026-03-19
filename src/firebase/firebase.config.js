// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth(app);

export const registerUser = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

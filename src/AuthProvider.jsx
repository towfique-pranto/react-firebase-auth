import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext, useEffect } from "react";
import { auth, db } from "./firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const userData = await getDoc(userRef);
        console.log("User data:", userData.data());
        setUser({ ...userData.data(), uid: currentUser.uid });
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

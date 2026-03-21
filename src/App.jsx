import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { auth } from "./firebase/firebase.config";
import { useNavigate } from "react-router";

export default function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

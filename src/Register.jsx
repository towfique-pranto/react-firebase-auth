import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "./css/register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase/firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AuthContext } from "./AuthProvider";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(AuthContext);
  console.log("user in register:", user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const userRef = doc(db, "users", result.user.uid);
      await setDoc(userRef, {
        email,
        name,
        created_at: serverTimestamp(),
      });

      setName("");
      setEmail("");
      setPassword("");
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Create Account</h1>
        <label htmlFor="name" className={styles.label}>
          Username
        </label>
        <input
          value={name}
          type="text"
          name="name"
          id="name"
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          value={password}
          type="password"
          name="password"
          id="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          Register
        </button>
        <p className={styles.loginLink}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

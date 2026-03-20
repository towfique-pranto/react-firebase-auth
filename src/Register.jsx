import { useState } from "react";
import { Link } from "react-router";
import styles from "./css/register.module.css";
import { registerUser } from "./firebase/firebase.config";

function Register() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(userInfo.email, userInfo.password);
    console.log(userInfo);
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        action=""
        method="post"
        className={styles.form}
      >
        <h1 className={styles.heading}>Create Account</h1>
        <label htmlFor="name" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={styles.input}
          onChange={handleInputChange}
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          onChange={handleInputChange}
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.input}
          onChange={handleInputChange}
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

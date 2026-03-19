import { Link } from "react-router";
import styles from "./css/register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <form action="" method="post" className={styles.form}>
        <h1 className={styles.heading}>Create Account</h1>
        <label htmlFor="name" className={styles.label}>
          Username
        </label>
        <input type="text" name="name" id="name" className={styles.input} />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input type="email" name="email" id="email" className={styles.input} />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.input}
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

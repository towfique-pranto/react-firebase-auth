import { Link } from "react-router";
import styles from "./css/register.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <form action="" method="post" className={styles.form}>
        <h1 className={styles.heading}>Login</h1>
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
          Login
        </button>
        <p className={styles.loginLink}>
          Dont have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

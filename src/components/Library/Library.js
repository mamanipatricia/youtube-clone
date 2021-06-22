import Icon from "../Icon/Icon";
import styles from "./Library.module.css";

export default function Library() {
  return (
    <div className={styles.libraryContainer}>
      <Icon
        name="LIBRARY"
        color="var(--bg-sentiment)"
        className={{ width: "120", height: "120" }}
      />
      <div className={styles.textContent}>
        <h1 className={styles.title}>Enjoy your favorite videos</h1>
        <span>
        Sign in to access videos that you’ve liked or saved
        </span>
      </div>
      <button className={styles.loginButton}>
        <Icon
          name="PROFILE"
          color="var(--bg-type)"
          className={{ width: "24", height: "24" }}
        />
        <span className={styles.singIn}>SIGN IN</span>
      </button>
    </div>
  );
}

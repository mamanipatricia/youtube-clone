import Icon from "../Icon/Icon";
import styles from "./Subscription.module.css";

export default function Subscription() {
  return (
    <div className={styles.subscriptionContainer}>
      <Icon
        name="SUBSCRIPTION"
        color="var(--bg-sentiment)"
        className={{ width: "120", height: "120" }}
      />
      <div className={styles.textContent}>
        <h1 className={styles.title}>Don&apos;t miss the new videos</h1>
        <span>Login to see updates from your favorite YouTube channels</span>
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

import Icon from "../../Icon/Icon";
import styles from "./SignInButton.module.css";

export default function SignInButton({ icon, text }) {
  return (
    <button className={styles.singInButton}>
      <Icon
        name={icon}
        color="var(--bg-type)"
        className={{ width: "24", height: "24" }}
      />
      <span className={styles.singIn}>{text}</span>
    </button>
  );
}

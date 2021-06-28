import styles from "./SignInButton.module.css";
import google from "../../../assets/images/google.svg";

export default function SignInButton({ text, clicked }) {
  return (
    <button onClick={clicked} className={styles.singInButton}>
      <img className={styles.googleIcon} src={google} />
      <span className={styles.singIn}>{text}</span>
    </button>
  );
}

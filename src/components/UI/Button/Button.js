import Icon from "../../Icon/Icon";
import styles from "./Button.module.css";

export default function Button({ buttonContent, name }) {
  return (
    <div>
      <button className={styles.button}>{buttonContent}</button>
      <Icon name={name} />
    </div>
  );
}

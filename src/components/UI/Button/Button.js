import Icon from "../../Icon/Icon";
import styles from "./Button.module.css";

export default function Button({ text, icon }) {
  return (
    <div>
      <button className={styles.button}>{text}</button>
      {icon && <Icon name={icon} />}
    </div>
  );
}

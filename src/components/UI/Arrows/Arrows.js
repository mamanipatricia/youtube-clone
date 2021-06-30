import Icon from "../../Icon/Icon";
import styles from "./Arrow.module.css";

export const ArrowRight = () => {
  return (
    <span className={styles.arrowRight}>
      <Icon name="ARROW_RIGHT" />
    </span>
  );
};
export const ArrowLeft = () => {
  return (
    <span className={styles.arrowLeft}>
      <Icon name="ARROW_LEFT" />
    </span>
  );
};

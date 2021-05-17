import { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./MoreActions.module.css";
export const MoreActions = ({ direction }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const toggleMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };
  return (
    <div className={styles.moreActionMenu}>
      <button onClick={toggleMenu}>
        <span
          className={`${styles.iconContainer} ${
            direction === "horizontal" ? styles.iconContainerHorizontal : ""
          }`}
        >
          <Icon name="MENU" />
        </span>
      </button>
      {isVisibleMenu && (
        <div className={styles.itemsContainer}>
          {["A", "B", "C", "D"].map((item) => {
            return <div className={styles.items}>{item}</div>;
          })}
        </div>
      )}
    </div>
  );
};

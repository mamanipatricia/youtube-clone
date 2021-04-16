import React from "react";
import menuDetail from "../../assets/images/menu.svg";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <img className={styles.menu} src={menuDetail} alt="Menu detail" />
    </div>
  );
}

import React from "react";
import styles from "./Search.module.css";
import Icon from "../Icon/Icon";

function Search() {
  return (
    <div className={styles.formWrapper}>
      <form style={{ display: "flex" }}>
        <div className={styles.searchContainer}>
          <input className={styles.searchInput} placeholder="Search" />
        </div>
        <button className={styles.searchButton}>
          <Icon name="SEARCH" width="20px" height="20px" />
        </button>
        <button className={styles.buttonMicrophone}>
          <Icon name="MICROPHONE" />
        </button>
      </form>
    </div>
  );
}

export default Search;

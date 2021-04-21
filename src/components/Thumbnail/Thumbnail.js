import React from "react";
import styles from "./Thumbnail.module.css";

export default function Thumbnail({ url, duration }) {
  return (
    <div className={styles.thumbnailContainer}>
      <img className={styles.thumbnail} src={url} alt="" width="200px" />
  <span className={styles.time}>{duration}</span>
    </div>
  );
}

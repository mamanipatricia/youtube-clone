import React from "react";
import styles from "./Thumbnail.module.css";

export default function Thumbnail({ url }) {
  return (
    <div className={styles.thumbnailContainer}>
      <img className={styles.thumbnail} src={url} alt="" width="200px" />
    </div>
  );
}

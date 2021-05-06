import React from "react";
import styles from "./Thumbnail.module.css";

export default function Thumbnail({ url, duration = "" }) {
  const durationParsed = duration
    .substring(2, duration.length - 1)
    .replace(/H|M/gi, ":")
    .replace(/\d+/g, function (x, i) {
      if (x.length === 1 && i !== 0) return "0" + x;
      return x;
    });

  return (
    <div className={styles.thumbnailContainer}>
      <img className={styles.thumbnail} src={url} alt="" width="200px" />
      <span className={styles.time}>{durationParsed}</span>
    </div>
  );
}

import React from "react";
import styles from "./Thumbnail.module.css";

export default function Thumbnail({ url, duration = "" }) {
  let pattern = /PT(\d{1,3}H)?(\d{1,2}M)?(\d{1,2}S)?$/gi;
  let matches = pattern.exec(duration);
  const hours = String(parseInt(matches[1]));
  let minutes = String(parseInt(matches[2]));
  let seconds = String(parseInt(matches[3]));

  minutes =
    isNaN(hours) && minutes.length <= 1 ? minutes : minutes.padStart(2, "0");
  seconds = seconds.length <= 1 ? seconds.padStart(2, "0") : seconds;

  const durationParsed = `${!isNaN(hours) ? `${hours}:` : ""}${
    !isNaN(minutes) ? `${minutes}:` : ""
  }${!isNaN(seconds) ? `${seconds}` : ""}`;

  return (
    <div className={styles.thumbnailContainer}>
      <img className={styles.thumbnail} src={url} alt="" width="200px" />

      <span className={styles.time}>{durationParsed}</span>
    </div>
  );
}

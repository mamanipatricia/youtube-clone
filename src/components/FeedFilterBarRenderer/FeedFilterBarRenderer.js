import React from "react";
import styles from "./FeedFilterBarRenderer.module.css";

export default function FeedFilterBarRenderer() {
  const feedFilterItems = new Map([
    ["feed1", "All"],
    ["feed2", "Live"],
    ["feed3", "JavaScript"],
    ["feed4", "Angular"],
    ["feed5", "Training"],
    ["feed6", "Music"],
    ["feed7", "Chill out music"],
    ["feed8", "Comedy"],
    ["feed9", "cryptocurrencies"],
    ["feed10", "Electronic Music"],
    ["feed11", "Recently uploaded"],
  ]);
  return (
    <div className={styles.feedFilterContainer}>
      {[...feedFilterItems].map((item, index) => {
        return (
          <div key={`key${index}`} className={styles.feedFilter}>
            {item[1]}
          </div>
        );
      })}
    </div>
  );
}

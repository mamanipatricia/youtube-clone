import { useState } from "react";

import styles from "./FeedFilterBarRenderer.module.css";

const feedFilterItems = [
  { id: 1, label: "All" },
  { id: 2, label: "Live" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "Angular" },
  { id: 5, label: "Training" },
  { id: 6, label: "Music" },
  { id: 7, label: "Chill out music" },
  { id: 8, label: "Comedy" },
  { id: 9, label: "cryptocurrencies" },
  { id: 10, label: "Electronic Music" },
  { id: 11, label: "Recently uploaded" },
];

export default function FeedFilterBarRenderer({ onChangeFeed }) {
  const [feed, setFeed] = useState(null);

  const feedDisplayHandle = (newFeed) => {
    setFeed(newFeed);
    onChangeFeed(newFeed);
  };

  return (
    <div className={styles.feedFilterContainer}>
      {feedFilterItems.map((feedItem) => {
        return (
          <div
            key={`key-${feedItem.id}`}
            className={`${styles.feedFilter} ${
              feedItem.label === feed ? styles.active : ""
            }`}
            onClick={() => feedDisplayHandle(feedItem.label)}
          >
            {feedItem.label}
          </div>
        );
      })}
    </div>
  );
}

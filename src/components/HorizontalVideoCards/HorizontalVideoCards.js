import React from "react";
import HorizontalVideoCard from "./HorizontalVideoCard./HorizontalVideoCard";
import styles from "./HorizontalVideoCards.module.css";

export default function HorizontalVideoCards({ videos }) {
  console.log(`[videos]`, videos);
  return (
    <div className={styles.horizontalVideoCardsContainer}>
      {/* {JSON.stringify(videos, null, 2)} */}
      {videos.items.map((video, index) => {
        return <HorizontalVideoCard key={`index-${index}`} video={video} />;
      })}
    </div>
  );
}

import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoCards.module.css";

export default function VideoCards({
  videos = [],
  hiddenContent = [],
  menuContent,
}) {
  return (
    <div className={styles.videoCardsContainer}>
      {videos.map((video, index) => {
        return (
          <VideoCard
            hiddenContent={hiddenContent}
            key={`index-${index}`}
            video={video}
            menuContent={menuContent}
          />
        );
      })}
    </div>
  );
}

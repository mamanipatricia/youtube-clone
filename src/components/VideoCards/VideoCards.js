import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoCards.module.css";

export default function VideoCards({ videos = [] }) {
  return (
    <div className={styles.videoCardsContainer}>
      {videos.map((video, index) => {
        return <VideoCard key={`index-${index}`} video={video} />;
      })}
    </div>
  );
}

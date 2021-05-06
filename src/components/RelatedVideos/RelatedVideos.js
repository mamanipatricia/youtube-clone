import React from "react";
import HorizontalVideoCard from "../HorizontalVideoCards/HorizontalVideoCard./HorizontalVideoCard";
import styles from "./RelatedVideosContainer.module.css";

export default function RelatedVideos({ videos }) {
  console.log(`videos))-`, videos, typeof videos);
  return (
    <div className={styles.relatedVideosContainer}>
      {videos.map((video) => {
        return (
          <HorizontalVideoCard
            key={`index-${video.id}`}
            video={video}
            direction="row"
          />
        );
      })}
    </div>
  );
}

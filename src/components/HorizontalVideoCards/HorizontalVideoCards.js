import React from "react";
import HorizontalPlaylistCard from "../HorizontalPlaylistCard/HorizontalPlaylistCard";
import HorizontalVideoCard from "./HorizontalVideoCard./HorizontalVideoCard";
import styles from "./HorizontalVideoCards.module.css";

export default function HorizontalVideoCards({ videos }) {
  return (
    <div className={styles.horizontalVideoCardsContainer}>
      {/* {JSON.stringify(videos, null, 2)} */}
      {videos.items?.map((video, index) => {
        if (video.playlistId) {
          return (
            <HorizontalPlaylistCard key={`index-${index}`} video={video} />
          );
        } else {
          return <HorizontalVideoCard key={`index-${index}`} video={video} />;
        }
      })}
    </div>
  );
}

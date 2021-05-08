import React from "react";
import { Link } from "react-router-dom";
import { Owner } from "../Channel/Channel";
import { Title } from "../Detail/Detail";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./HorizontalPlaylistCard.module.css";

export default function HorizontalPlaylistCard({ video, direction }) {
  if (!video) return "video not found";
  const {
    playlistId,
    title,
    thumbnail,
    count,
    channel,
    duration,
    items,
  } = video;

  return (
    <div className={styles.horizontalVideoCardContainer}>
      <div className={`${direction === "row" ? styles.relatedVideos : ""}`}>
        <Link to={`/watch/${items[0].videoId}?list=${playlistId}`}>
          <div>
            <Thumbnail url={thumbnail} duration={duration} />
          </div>
        </Link>
        <div className={styles.horizontalVideoCardInfo}>
          <Title title={title} />
          <Owner channel={channel} />
        </div>
        <div>VER LISTA COMPLETA</div>
      </div>
    </div>
  );
}

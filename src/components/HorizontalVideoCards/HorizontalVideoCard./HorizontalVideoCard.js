import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../Thumbnail/Thumbnail";
import Detail from "../../Detail/Detail";
import Icon from "../../Icon/Icon";
import styles from "./HorizontalVideoCard.module.css";

export default function HorizontalVideoCard({ video, direction }) {
  if (!video) return "video not found";
  const {
    videoId,
    title,
    viewCount,
    thumbnail,
    channel,
    publishedAt,
    duration,
  } = video;

  return (
    <div className={styles.horizontalVideoCardContainer}>
      <div className={`${direction === "row" ? styles.relatedVideos : ""}`}>
        <Link to={`/watch/${videoId}`}>
          <div>
            <Thumbnail url={thumbnail} duration={duration} />
          </div>
        </Link>
        <div className={styles.horizontalVideoCardInfo}>
          <Detail
            title={title}
            views={viewCount}
            channel={channel}
            publishedAt={publishedAt}
          />
          <div className={styles.menu}>
            <Icon name="MENU" />
          </div>
        </div>
      </div>
    </div>
  );
}

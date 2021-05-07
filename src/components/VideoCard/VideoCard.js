import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import Avatar from "../Avatar/Avatar";
import Detail from "../Detail/Detail";
import styles from "./VideoCard.module.css";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

function VideoCard({ video }) {
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
    <div className={styles.videoCardContainer}>
      <Link to={`/watch/${videoId}`}>
        <div>
          <Thumbnail url={thumbnail} duration={duration} />
        </div>
      </Link>
      <div className={styles.videoCardInfo}>
        <Avatar channel={channel} />
        <Detail
          title={title}
          views={viewCount}
          channel={channel}
          timestamp={publishedAt}
        />
        <div className={styles.menu}>
          <Icon name="MENU" />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

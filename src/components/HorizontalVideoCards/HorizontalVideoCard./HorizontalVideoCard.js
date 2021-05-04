import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../Thumbnail/Thumbnail";
import Detail from "../../Detail/Detail";
import Icon from "../../Icon/Icon";
import styles from "./HorizontalVideoCard.module.css";

export default function HorizontalVideoCard({ video }) {
  console.log(`{video-}`, video);
  if (!video) return "video not found";
  const {
    id,
    title,
    views,
    thumbnail: url,
    owner,
    timestamp = 100,
    duration,
  } = video;

  return (
    <div className={styles.horizontalVideoCardContainer}>
      <div>
        <Link to={`/watch/${id}`}>
          <div>
            <Thumbnail url={url} duration={duration} />
          </div>
        </Link>
        <div className={styles.horizontalVideoCardInfo}>
          <Detail
            title={title}
            views={views}
            owner={owner}
            timestamp={timestamp}
          />
          <div className={styles.menu}>
            <Icon name="MENU" />
          </div>
        </div>
      </div>
    </div>
  );
}

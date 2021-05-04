import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import Avatar from "../Avatar/Avatar";
import Detail from "../Detail/Detail";
import styles from "./VideoCard.module.css";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

function VideoCard({ video }) {
  const { id, title, views, url, owner, timestamp, duration } = video;

  return (
    <div className={styles.videoCardContainer}>
      <Link to={`/watch/${id}`}>
        <div>
          <Thumbnail url={url} duration={duration} />
        </div>
      </Link>
      <div className={styles.videoCardInfo}>
        <Avatar owner={owner} />
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
  );
}

export default VideoCard;

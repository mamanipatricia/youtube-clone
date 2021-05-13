import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Owner } from "../Channel/Channel";
import { Title } from "../Detail/Detail";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./HorizontalPlaylistCard.module.css";

export default function HorizontalPlaylistCard({ video, direction, dataRef }) {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const listId = query.get("list");

  // https://www.youtube.com/playlist?list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC
  if (!video) return "video not found";
  const { playlistId, title, thumbnail, count, channel, duration, items } =
    video;
  const fullPlayListHandle = () => {
    history.push({
      pathname: `/playlist`,
      search: `?list=${listId}`,
    });
  };

  return (
    <div ref={dataRef} className={styles.horizontalVideoCardContainer}>
      <div className={`${direction === "row" ? styles.horizontalCard : ""}`}>
        <Link to={`/watch/${items[0].videoId}?list=${playlistId}`}>
          <div className={styles.hoveredCard}>
            <Thumbnail
              className={`${(styles.thumbnailHovered, styles.playlistCovered)}`}
              url={thumbnail}
              duration={duration}
            />
            <div className={styles.playlistCovered}>{count}</div>
          </div>
        </Link>
        <div className={styles.horizontalVideoCardInfo}>
          <Title title={title} />
          <Owner channel={channel} />
        </div>
        <div onClick={fullPlayListHandle}>VIEW FULL PLAYLIST</div>
      </div>
    </div>
  );
}

import { Link, useHistory } from "react-router-dom";
import { Owner } from "../Channel/Channel";
import { Title } from "../Detail/Detail";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./HorizontalPlaylistCard.module.css";

export default function HorizontalPlaylistCard({ video, direction, dataRef }) {
  const history = useHistory();
  console.log(`[dataRef]`, dataRef);
  if (!video) return "video not found";
  const { playlistId, title, thumbnail, count, channel, duration, items } =
    video;
  const fullPlayListHandle = () => {
    history.push({
      pathname: `/playlist`,
      search: `?list=${playlistId}`,
    });
  };

  return (
    <div ref={dataRef}>
      <div className={`${direction === "row" ? styles.horizontalCard : ""}`}>
        <Link to={`/watch/${items[0]?.videoId}?list=${playlistId}`}>
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
          {/* <span>{title}</span> */}
          <Title title={title} />
          <Owner channel={channel} />
        </div>
        <div className={styles.viewFullPlaylist} onClick={fullPlayListHandle}>
          VIEW FULL PLAYLIST
        </div>
      </div>
    </div>
  );
}

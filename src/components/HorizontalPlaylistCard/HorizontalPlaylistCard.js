import { Link, useHistory } from "react-router-dom";
import { Owner } from "../Channel/Channel";
import { Title } from "../Detail/Detail";
import Icon from "../Icon/Icon";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./HorizontalPlaylistCard.module.css";

export default function HorizontalPlaylistCard({ video, direction, dataRef }) {
  const history = useHistory();
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
            <div className={styles.viewPlay}>
              <Icon name="PLAY" color="white" />
              PLAY ALL
            </div>
            <Thumbnail
              className={`${(styles.thumbnailHovered, styles.playlistCovered)}`}
              url={thumbnail}
              duration={duration}
            />
            <div className={styles.playlistCovered}>
              {count} <Icon name="PLAY_PLAYLIST" color="white" />
            </div>
          </div>
        </Link>
        <div className={styles.horizontalVideoCardInfo}>
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

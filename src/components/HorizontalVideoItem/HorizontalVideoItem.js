import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./HorizontalVideoItem.module.css";

export const HorizontalVideoItem = ({ video, index }) => {
  const {
    thumbnail,
    title,
    channel: { channelName },
    duration,
  } = video;
  return (
    <div className={styles.horizontalVideoItemContainer}>
      <div className={styles.indexPlaylistItem}>{index}</div>
      <div className={styles.thumbnailContainer}>
        <Thumbnail url={thumbnail} duration={duration} />
      </div>
      <div className={styles.playlistItemDetail}>
        <h3>{title}</h3>
        <span>{channelName}</span>
      </div>
    </div>
  );
};

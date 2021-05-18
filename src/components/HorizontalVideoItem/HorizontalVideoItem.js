import { Link } from "react-router-dom";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./HorizontalVideoItem.module.css";

export const HorizontalVideoItem = ({ video, playlistId, index }) => {
  const {
    videoId,
    thumbnail,
    title,
    channel: { channelName, channelId },
    duration,
  } = video;
  return (
    <>
      <div className={styles.thumbnailContainer}>
        <Link to={`/watch/${videoId}?list=${playlistId}&index=${+index + 1}`}>
          <Thumbnail url={thumbnail} duration={duration} />
        </Link>
      </div>
      <div className={styles.playlistItemDetail}>
        <Link
          title={title}
          className={styles.itemTitle}
          to={`/watch/${videoId}?list=${playlistId}&index=${+index + 1}`}
        >
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <Link className={styles.channel} to={`/channel/${channelId}`}>
          <span title={channelName}>{channelName}</span>
        </Link>
      </div>
    </>
  );
};

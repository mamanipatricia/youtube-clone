import { Link } from "react-router-dom";
import Thumbnail from "../../Thumbnail/Thumbnail";
import Detail from "../../Detail/Detail";
import styles from "./HorizontalVideoCard.module.css";
import MoreActions from "../../MoreActions/MoreActions";

export default function HorizontalVideoCard({
  video,
  direction,
  dataRef,
  menuContent = [],
}) {
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
    <div ref={dataRef} className={styles.horizontalVideoCardContainer}>
      <div className={`${direction === "row" ? styles.horizontalCard : ""}`}>
        <Link to={`/watch/${videoId}`}>
          <div>
            <Thumbnail url={thumbnail} duration={duration} />
          </div>
        </Link>
        <div className={styles.horizontalVideoCardInfo}>
          <Detail
            title={title}
            viewCount={viewCount}
            channel={channel}
            publishedAt={publishedAt}
          />
          <div className={styles.menu}>
            <MoreActions menuContent={menuContent} />
          </div>
        </div>
      </div>
    </div>
  );
}

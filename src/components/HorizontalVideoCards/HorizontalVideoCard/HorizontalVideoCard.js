import { Link } from "react-router-dom";
import Detail from "../../Detail/Detail";
import Thumbnail from "../../Thumbnail/Thumbnail";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import styles from "./HorizontalVideoCard.module.css";

export default function HorizontalVideoCard({
  video,
  direction,
  dataRef,
  menuContent = [],
  ownerCustomStyles = {},
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
    liveBroadcast,
  } = video;

  return (
    <div ref={dataRef} className={styles.horizontalVideoCardContainer}>
      <div className={`${direction === "row" ? styles.horizontalCard : ""}`}>
        <Link to={`/watch/${videoId}`}>
          <div>
            <Thumbnail
              url={thumbnail}
              duration={duration}
              liveBroadcast={liveBroadcast}
            />
          </div>
        </Link>
        <div className={styles.horizontalVideoCardInfo}>
          <Detail
            ownerCustomStyles={ownerCustomStyles}
            title={title}
            viewCount={viewCount}
            channel={channel}
            publishedAt={publishedAt}
            videoId={videoId}
            liveBroadcast={liveBroadcast}
          />
          <div className={styles.menu}>
            <DropdownMenu name="MENU" menuContent={menuContent} />
          </div>
        </div>
      </div>
    </div>
  );
}

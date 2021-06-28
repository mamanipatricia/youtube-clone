import Thumbnail from "../Thumbnail/Thumbnail";
import Avatar from "../Avatar/Avatar";
import Detail from "../Detail/Detail";
import styles from "./VideoCard.module.css";
import { Link } from "react-router-dom";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";

function VideoCard({ video, direction, hiddenContent = [], menuContent }) {
  const {
    videoId,
    title,
    viewCount,
    thumbnail,
    channel,
    publishedAt,
    duration,
    description,
    liveBroadcast,
  } = video;

  return (
    <div
      className={`${styles.videoCardContainer} ${
        direction === "horizontal" ? styles.videoCardContainerHorizontal : ""
      }`}
    >
      <Link to={`/watch/${videoId}`}>
        <div>
          <Thumbnail
            url={thumbnail}
            duration={duration}
            liveBroadcast={liveBroadcast}
          />
        </div>
      </Link>

      <div
        className={`${
          direction !== "horizontal"
            ? styles.videoCardInfo
            : styles.videoCardInfoHz
        }`}
      >
        {direction !== "horizontal" && !hiddenContent.includes("avatar") && (
          <Avatar channel={channel} />
        )}
        <Detail
          title={title}
          viewCount={viewCount}
          channel={channel}
          publishedAt={publishedAt}
          description={description}
          direction={direction}
          hiddenContent={hiddenContent}
          videoId={videoId}
          liveBroadcast={liveBroadcast}
        />
        <div className={styles.menu}>
          <DropdownMenu name="MENU" menuContent={menuContent} />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

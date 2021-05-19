import Thumbnail from "../Thumbnail/Thumbnail";
import Avatar from "../Avatar/Avatar";
import Detail from "../Detail/Detail";
import styles from "./VideoCard.module.css";
import { Link } from "react-router-dom";
import MoreActions from "../MoreActions/MoreActions";

/*

FORMATEAR LOS VIEWS/SUBSCRIBERS
LIKES = 0   COMMENTS

STYLES IN SEARCH
HOME/RESULTS -> MENU CONTENT
SEARCH -> BG 100%
CARROUSEL -> HEADER YA TU SABE

FIX SEARCH EMPTY VALUE

Ingles we

SERVICIOS -> FORMATTERS -> CUSTOM HOOKS -> UTILS -> 
*/
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
  } = video;

  return (
    <div
      className={`${styles.videoCardContainer} ${
        direction === "horizontal" ? styles.videoCardContainerHorizontal : ""
      }`}
    >
      <Link to={`/watch/${videoId}`}>
        <div>
          <Thumbnail url={thumbnail} duration={duration} />
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
        />
        <div className={styles.menu}>
          <MoreActions menuContent={menuContent} />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

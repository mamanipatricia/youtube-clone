import { Link } from "react-router-dom";
import { getTimestamp } from "../../Utils/Timestamp";
import Avatar from "../Avatar/Avatar";
import { Owner } from "../Channel/Channel";
import styles from "./Detail.module.css";
import { formatDigit } from "../../Utils/views";
import LiveBadge from "../Badges/LiveBadge/LiveBadge";

export default function Detail(props) {
  const {
    title,
    viewCount,
    publishedAt,
    channel,
    direction,
    description,
    videoId,
    liveBroadcast,
    ownerCustomStyles = {},
  } = props;
  return (
    <div
      className={`${styles.detailContainer} ${
        direction === "horizontal" ? styles.detailContainerHz : ""
      }`}
    >
      <div className={styles.titleContainer}>
        <Link to={`/watch/${videoId}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
      </div>
      <div className={styles.channelInfo}>
        {direction === "horizontal" && (
          <Avatar size="extraSmall" channel={channel} />
        )}
        <Owner channel={channel} customStyles={ownerCustomStyles} />
      </div>
      <ViewsAndTimestamp viewCount={viewCount} publishedAt={publishedAt} />
      {direction === "horizontal" && (
        <p className={styles.description}> {description} </p>
      )}

      <LiveBadge liveBroadcast={liveBroadcast} />
    </div>
  );
}
export function Title({ title }) {
  return (
    <div className={styles.titleContainer}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
export function ViewsAndTimestamp({ viewCount, publishedAt, customStyles }) {
  return (
    <div style={customStyles} className={styles.viewTimestampContainer}>
      <span>{formatDigit(+viewCount)} views</span>
      <span>•</span>
      <span>{getTimestamp(publishedAt)}</span>
    </div>
  );
}

import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { Owner } from "../Channel/Channel";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const {
    title,
    viewCount,
    publishedAt,
    channel,
    direction,
    description,
    videoId,
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
        <Owner channel={channel} />
      </div>
      <ViewsAndTimestamp viewCount={viewCount} publishedAt={publishedAt} />
      {direction === "horizontal" && (
        <p className={styles.description}> {description} </p>
      )}
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
export function ViewsAndTimestamp({ viewCount, publishedAt }) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const date = new Date(publishedAt);
  let dateFormat = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className={styles.viewTimestampContainer}>
      <span className={styles.videoTimestampViews}>{viewCount} views</span>
      <span>•</span>
      <span>{dateFormat}</span>
    </div>
  );
}

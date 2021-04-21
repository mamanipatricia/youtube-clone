import { Owner } from "../Channel/Channel";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const { title, views, timestamp, owner } = props;
  return (
    <div className={styles.detailContainer}>
      <Title title={title} />
      <Owner owner={owner} />
      <ViewsAndTimestamp views={views} timestamp={timestamp} />
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
export function ViewsAndTimestamp({ views, timestamp }) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const date = new Date(timestamp);
  let dateFormat = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className={styles.viewTimestampContainer}>
      <span className={styles.videoTimestampViews}>{views} views</span>
      <span>•</span>
      <span>{dateFormat}</span>
    </div>
  );
}

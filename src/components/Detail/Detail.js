import { Owner } from "../Channel/Channel";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const { title, viewCount, publishedAt, channel } = props;
  return (
    <div className={styles.detailContainer}>
      <Title title={title} />
      <Owner channel={channel} />
      <ViewsAndTimestamp viewCount={viewCount} publishedAt={publishedAt} />
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

import { getDuration } from "../../Utils/duration";
import styles from "./Thumbnail.module.css";

export default function Thumbnail({ url, liveBroadcast, duration = "" }) {
  const time = getDuration(duration);
  return (
    <div className={styles.thumbnailContainer}>
      <img className={styles.thumbnail} src={url} alt="" width="200px" />
      {liveBroadcast !== "live" && <span className={styles.time}>{time}</span>}
    </div>
  );
}

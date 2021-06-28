import styles from "./LiveBadge.module.css";

export default function LiveBadge({ liveBroadcast }) {
  return (
    <>
      {liveBroadcast === "live" && (
        <span className={styles.liveBadge}>LIVE NOW</span>
      )}
    </>
  );
}

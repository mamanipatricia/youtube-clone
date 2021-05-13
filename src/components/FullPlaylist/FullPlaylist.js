import HorizontalVideoCards from "../HorizontalVideoCards/HorizontalVideoCards";
import styles from "./FullPlaylist.module.css";
export const FullPlaylist = () => {
  return (
    <div>
      <div className={styles.playlistSidebarContainer}> PLAYLIST SIDEBAR </div>
      <div className={styles.playlistBrowserResult}>
        <HorizontalVideoCards />
      </div>
    </div>
  );
};

import React from "react";
import Icon from "../Icon/Icon";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./PlaylistPanel.module.css";

export default function PlaylistPanel() {
  return (
    <div className={styles.playlistContainer}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTopRow}>
            <div className={styles.headerDescription}>
              <h3>
                🧑‍💻Bootcamp FullStack Gratuito | Javascript, React.js,
                GraphQL, Node.js, TypeScript y +
              </h3>
              <div>
                <span>midudev</span>
                <span>-1/23</span>
              </div>
            </div>
            <div className={styles.expandIcon}>
              <Icon name="CHEVRON_UP" color="var(--bg-sentiment)" />
            </div>
          </div>
          <div className={styles.playlistActions}>
            <div className={styles.playlistActionMenu}>
              <Icon name="LOOP" color="var(--bg-sentiment)" />
              <Icon name="SHUFFLE" color="var(--bg-sentiment)" />
            </div>
            <div className={styles.saveButton}>
              <Icon name="SAVE_PLAYLIST" color="var(--bg-sentiment)" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.playlistItemsContainer} custom-scroll`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (item, index) => {
            return (
              <div className={styles.playlistItem}>
                <div className={styles.indexPlaylistItem}>{index + 1}</div>
                <Thumbnail url="https://i.ytimg.com/vi/yPYzj9Gv9y4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB4IzcaTg-GVQfcAvVAK4JwY--59w" />
                <div className={styles.playlistItemDetail}>
                  <h3>
                    🧑‍💻 Presentación del curso y Fundamentos del Desarrollo
                    Web - Bootcamp FullStack Gratuito 🧑‍💻 Presentación del
                    curso y Fundamentos del Desarrollo Web - Bootcamp FullStack
                    Gratuito
                  </h3>
                  <span>midudev</span>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

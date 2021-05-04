import React from "react";
import styles from "./ChannelSection.module.css";
import Icon from "../Icon/Icon";
import HorizontalVideoCards from "../HorizontalVideoCards/HorizontalVideoCards";

export default function ChannelSections({ videos = [] }) {
  // const {
  //   items,
  //   section: { title },
  // } = videos;

  return (
    <div className={styles.channelSectionContainer}>
      {/* mejores videos del canal */}
      {videos.map((item, idx) => {
        return (
          <div key={`item-${idx}`} className={styles.subheaderContainer}>
            <div className={styles.subheader}>
              <div className={styles.titleContainer}>
                <div className={styles.titleText}>{item.section.title}</div>
                <div className={styles.playButton}>
                  <Icon name="PLAY" color="var(--text-secondary)" />
                  <span> REPRODUCIR TODO</span>
                </div>
              </div>
              <div className={styles.subtitle}>{item.section.description}</div>
            </div>
            {/* playlist shelf */}
            <div className={styles.shelfContainer}>
              <HorizontalVideoCards videos={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import styles from "./ChannelSection.module.css";
import Icon from "../Icon/Icon";
import HorizontalVideoCards from "../HorizontalVideoCards/HorizontalVideoCards";

export default function ChannelSections({ videos = [], menuContent }) {
  return (
    <div>
      {videos.map((item, idx) => {
        return (
          <div key={`item-${idx}`} className={styles.subheaderContainer}>
            <div className={styles.subheader}>
              <div className={styles.titleContainer}>
                <div className={styles.titleText}>{item.section.title}</div>
                <div className={styles.playButton}>
                  <Icon name="PLAY" color="var(--text-secondary)" />
                  <span> PLAY ALL</span>
                </div>
              </div>
              <div className={styles.subtitle}>{item.section.description}</div>
            </div>
            <div className={styles.shelfContainer}>
              <HorizontalVideoCards
                videos={item}
                direction="column"
                menuContent={menuContent}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

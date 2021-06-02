import Avatar from "../Avatar/Avatar";
import { Owner, Subscribers } from "../Channel/Channel";
import Icon from "../Icon/Icon";
import Button from "../UI/Button/Button";
import styles from "./ChannelInfo.module.css";

export const ChannelInfo = ({ channel, displaySubs = false }) => {
  return (
    <div className={styles.watchMetaContainer}>
      <Avatar size="medium" channel={channel} />
      <div className={styles.watchOwnerContainer}>
        <span className={styles.watchOwnerText}>
          <Owner channel={channel} />
        </span>
        {displaySubs && (
          <span className={styles.watchOwnerSubscribers}>
            <Subscribers channel={channel} />
          </span>
        )}
      </div>
      <div className={styles.watchSubscribeContainer}>
        <Button text="SUBSCRIBED" />
        <Icon name="NOTIFICATION_1" color="var(--bg-sentiment)" />
      </div>
    </div>
  );
};

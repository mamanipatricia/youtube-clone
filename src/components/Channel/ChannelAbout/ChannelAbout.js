import { useEffect, useState } from "react";
import { youTubeService } from "../../../services";
import { getTimestamp } from "../../../Utils/Timestamp";
import Button from "../../UI/Button/Button";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import styles from "./ChannelAbout.module.css";
import { MENU_CHANNEL } from "../../Constants/Constants";

export const ChannelAbout = ({ channelId }) => {
  const [channelInfo, setChannelInfo] = useState([]);

  const getChannels = async () => {
    const { data } = await youTubeService.getChannel(channelId);
    setChannelInfo(data);
  };

  useEffect(() => {
    if (channelInfo && channelId) {
      getChannels();
    }
  }, []);

  return (
    <div className={styles.channelAboutContainer}>
      <div className={styles.leftContent}>
        <div className={styles.descriptionContainer}>
          <h4>Description</h4>
          <p>{channelInfo.channelDescription}</p>
        </div>
        <hr />
        <div className={styles.detailsContainer}>
          <h4>Details</h4>
          <div className={styles.details}>
            <span>For business inquiries:</span>
            <Button text="VIEW EMAIL ADDRESS" />
            <span>Location:</span>
            <span>{channelInfo.channelOwnerCountry}</span>
          </div>
        </div>
        <hr />
        <div className={styles.linksContainer}>
          <h4>Links</h4>
          <div className={styles.linksListContainer}>
            <span>🔥 IMPROVE AS A WEB DEVELOPER</span>
            <span>Twitch</span>
            <span>Patreon</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <div className={styles.rightContentContainer}>
        <div className={styles.rightContent}>
          <div>STATS</div>
          <div>Joined {getTimestamp(channelInfo?.channelPublishedAt)}</div>
          <div>{channelInfo.channelViewCount} views</div>
        </div>
        <DropdownMenu
          name="REPORT"
          menuContent={MENU_CHANNEL}
          position="left"
        />
      </div>
    </div>
  );
};

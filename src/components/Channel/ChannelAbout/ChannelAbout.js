import { useEffect, useState } from "react";
import { youTubeService } from "../../../services/YouTubeService";
import { getTimestamp } from "../../../Utils/Timestamp";
import Button from "../../UI/Button/Button";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import styles from "./ChannelAbout.module.css";

const menuChannel = [
  {
    id: 1,
    label: "Block user",
    icon: "",
  },
  {
    id: 2,
    label: "Report channel header",
    icon: "",
  },
  {
    id: 3,
    label: "Report profile picture",
    icon: "",
  },
  {
    id: 4,
    label: "Report user",
    icon: "",
  },
];

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
          <div>{getTimestamp(channelInfo?.channelPublishedAt)}</div>
          <div>{channelInfo.channelViewCount} views</div>
        </div>
        <DropdownMenu name="REPORT" menuContent={menuChannel} position="left" />
      </div>
    </div>
  );
};

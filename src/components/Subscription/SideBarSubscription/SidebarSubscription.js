import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userService } from "../../../services";
import Icon from "../../Icon/Icon";
import styles from "./SidebarSubscription.module.css";

export const SidebarSubscription = () => {
  const [channelData, setChannelData] = useState([]);
  const [numberOfSubscriptions, setNumberOfSubscriptions] = useState();
  const [nextPageToken, setNextPageToken] = useState("");

  const getUserChannel = async (params = {}) => {
    const response = await userService.getUserChannel(params);
    setNextPageToken(response.nextPageToken);
    setNumberOfSubscriptions(response.pageInfo?.totalResults);
    const channelFormatted = (response.items || []).map((channel) => {
      return {
        id: channel.id,
        channelId: channel.snippet.resourceId.channelId,
        title: channel.snippet.title,
        thumbnail: channel.snippet.thumbnails.medium.url,
      };
    });
    setChannelData([...channelData, ...channelFormatted]);
  };

  useEffect(() => {
    getUserChannel();
  }, []);

  const showMoreHandle = () => {
    const params = {
      pageToken: nextPageToken,
    };
    if (nextPageToken) {
      getUserChannel(params);
    }
  };

  return (
    <div>
      <h3 className={styles.title}>
        SUBSCRIPTIONS - <strong>{numberOfSubscriptions}</strong>
      </h3>
      {channelData?.map((channel) => {
        return (
          <Link
            to={`/channel/${channel.channelId}`}
            key={channel.id}
            className={styles.channelItem}
          >
            <img
              src={channel.thumbnail}
              alt={channel.title}
              className={styles.channelThumbnail}
            />
            <span>{channel.title}</span>
          </Link>
        );
      })}
      {nextPageToken && (
        <button className={styles.showMoreButton} onClick={showMoreHandle}>
          <span className={styles.sidebarIcon}>
            <Icon name="CHEVRON_DOWN" />
          </span>
          <span>Show More</span>
        </button>
      )}
    </div>
  );
};

import { Link, Route, Switch, useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useEffect, useState } from "react";
import styles from "./Channel.module.css";
import Icon from "../Icon/Icon";
import { youTubeService } from "../../services/YouTubeService";
import ChannelHome from "./ChannelHome/ChannelHome";
import ChannelVideos from "./ChannelVideos/ChannelVideos";
import { ChannelPlaylists } from "./ChannelPlaylists/ChannelPlaylists";
import { ChannelAbout } from "./ChannelAbout/ChannelAbout";
import { ChannelChannels } from "./ChannelChannels/ChannelChannels";

const menuVideoCard = [
  {
    id: 1,
    label: "Add to queue",
    icon: "QUEUE",
  },
  {
    id: 2,
    label: "Save to watch later",
    icon: "CLOCK",
  },
  {
    id: 3,
    label: "Save to playlist",
    icon: "SAVE_PLAYLIST",
  },
];

export function Owner({ channel }) {
  const { channelId, channelName } = channel;

  return (
    <Link
      className={styles.ownerChannelName}
      to={`/channel/${channelId}`}
      title={channelName}
    >
      {channelName}
      <span className={styles.iconContainer}>
        <Icon name="CHECK_CIRCLE_THICK" />
      </span>
    </Link>
  );
}

export function Subscribers({ channel }) {
  const { subscribers } = channel;

  return (
    <div>
      {subscribers} <span> subscribers</span>
    </div>
  );
}

export function Channel() {
  let { channelId } = useParams();
  channelId = channelId.split("/")[0];
  // [channelId] = channelId.split("/"); // the same as above
  const [channel, setChannel] = useState({});
  const channelHeaderOptions = [
    { url: "", label: "START" },
    { url: "videos", label: "VIDEOS" },
    { url: "playlist", label: "PLAYLIST" },
    // { url: "community", label: "COMMUNITY" },
    { url: "channels", label: "CHANNELS" },
    { url: "about", label: "MORE INFORMATION" },
  ];

  const getChannel = async () => {
    try {
      const { data } = await youTubeService.getChannel(channelId);
      setChannel(data);
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    getChannel(channelId);
  }, []);

  if (!channel.channelId) {
    const div = <div>Channel not found</div>;
    return div;
  }

  const { banner } = channel;

  return (
    <>
      <div className={styles.channelContainer}>
        <div>
          {banner && (
            <img
              className={styles.bannerChannel}
              src={banner}
              alt="channel banner"
            />
          )}
        </div>
        <div className={styles.channelBgHeader}>
          <div className={styles.channelHeaderContainer}>
            <div className={styles.channelInfo}>
              <div className={styles.channelAvatar}>
                <Avatar size="large" channel={channel} />
              </div>
              <div className={styles.channelOwnerContainer}>
                <span className={styles.channelOwnerText}>
                  <Owner channel={channel} />
                </span>
                <span className={styles.channelOwnerSubscribers}>
                  <Subscribers channel={channel} />
                </span>
              </div>
            </div>
            <div className={styles.channelSubscribeButton}>
              <button className={styles.subscribeButton}>SUBSCRIBED</button>
              <Icon name="NOTIFICATION_1" />
            </div>
          </div>
          <div className={styles.channelTabbedHeader}>
            {channelHeaderOptions.map((options) => {
              return (
                <Link
                  className={styles.channelTabbedItem}
                  to={`/channel/${channelId}/${options.url}`}
                >
                  {options.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/channel/:channelId">
          <ChannelHome channelId={channelId} menuContent={menuVideoCard} />
        </Route>
        <Route path="/channel/:channelId/videos">
          <ChannelVideos channelId={channelId} menuContent={menuVideoCard} />
        </Route>
        <Route path="/channel/:channelId/playlist">
          <ChannelPlaylists channelId={channelId} />
        </Route>
        <Route path="/channel/:channelId/channels">
          <ChannelChannels channelId={channelId} />
        </Route>
        <Route path="/channel/:channelId/about">
          <ChannelAbout channelId={channelId} />
        </Route>
      </Switch>
    </>
  );
}

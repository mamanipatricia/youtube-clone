import { Link, useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import channelRaw from "../../Data/channel.json";
import { useEffect, useState } from "react";
import styles from "./Channel.module.css";
import VideoCards from "../VideoCards/VideoCards";
import Icon from "../Icon/Icon";

export function Owner(props) {
  const { owner } = props;
  const { id, channelName } = owner;

  return (
    <Link
      className={styles.ownerChannelName}
      to={`/channel/${id}`}
      title={channelName}
    >
      {channelName}
      <span className={styles.iconContainer}>
        <Icon name="CHECK_CIRCLE_THICK" class />
      </span>
    </Link>
  );
}

export function Subscribers(props) {
  const { owner } = props;
  const { subscribers } = owner;

  return <div>{subscribers}</div>;
}

export function Channel() {
  let { channelId } = useParams();
  const [channel, setChannel] = useState({});

  const channelHeaderOptions = [
    "START",
    "VIDEOS",
    "PLAYLIST",
    "COMMUNITY",
    "CHANNELS",
    "MORE INFORMATION",
  ];

  useEffect(() => {
    const response = channelRaw.channels.find(
      (channel) => channel.id === channelId
    );
    setChannel(response);
  }, [channelId]);

  if (!channel) {
    const div = <div>Channel not found</div>;
    return div;
  }

  const { banner } = channel;
  return (
    <div className={styles.channelContainer}>
      <div>
        <img
          className={styles.bannerChannel}
          src={banner}
          alt="channel banner"
        />
      </div>
      <div className={styles.channelBgHeader}>
        <div className={styles.channelHeaderContainer}>
          <div className={styles.channelInfo}>
            <div className={styles.channelAvatar}>
              <Avatar size="large" owner={channel} />
            </div>
            <div className={styles.channelOwnerContainer}>
              <span className={styles.channelOwnerText}>
                <Owner owner={channel} />
              </span>
              <span className={styles.channelOwnerSubscribers}>
                <Subscribers owner={channel} />
              </span>
            </div>
          </div>
          <div className={styles.channelSubscribeButton}>
            <button className={styles.subscribeButton}>SUBSCRIBED</button>
            <Icon name="NOTIFICATION_1" />
          </div>
        </div>
        <div className={styles.channelTabbedHeader}>
          {channelHeaderOptions.map((option) => {
            return (
              <div>
                <a className={styles.channelTabbedItem} href="#">
                  {option}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <VideoCards />
      </div>
    </div>
  );
}

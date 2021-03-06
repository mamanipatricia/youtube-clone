import { useEffect, useRef, useState } from "react";
import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import { useLocation } from "react-use";
import { youTubeService } from "../../services";
import ChannelHome from "./ChannelHome/ChannelHome";
import ChannelVideos from "./ChannelVideos/ChannelVideos";
import { ChannelPlaylists } from "./ChannelPlaylists/ChannelPlaylists";
import { ChannelAbout } from "./ChannelAbout/ChannelAbout";
import { ChannelChannels } from "./ChannelChannels/ChannelChannels";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import Button from "../UI/Button/Button";
import Carousel from "../UI/Carousel/Carousel";
import { ArrowLeft, ArrowRight } from "../UI/Arrows/Arrows";
import styles from "./Channel.module.css";
import { MENU_VIDEO_CARD } from "../Constants/Constants";

export function Owner({ channel, customStyles = {} }) {
  const { channelId, channelName } = channel;
  const history = useHistory();

  const goToChannel = (event) => {
    history.push(`/channel/${channelId}`);
    event.stopPropagation();
  };

  return (
    <div
      style={customStyles}
      onClick={goToChannel}
      className={styles.ownerChannelName}
      title={channelName}
    >
      {channelName}
      <span className={styles.iconContainer}>
        <Icon name="CHECK_CIRCLE_THICK" />
      </span>
    </div>
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
  const location = useLocation();
  const section = location.pathname.split("/")[3] || "";

  [channelId] = channelId.split("/");
  const [channel, setChannel] = useState({});

  const refCarousel = useRef(null);
  const refFirstItem = useRef(null);
  const refLastItem = useRef(null);

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
    getChannel();
  }, [channelId]);

  if (!channel.channelId) {
    const div = <div>Channel not found</div>;
    return div;
  }

  return (
    <>
      <div className={styles.channelContainer}>
        <div className={styles.bannerContainer}>
          {channel.banner && (
            <img
              className={styles.bannerChannel}
              src={channel.banner}
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
              <Button text="SUBSCRIBED" />
              <Icon name="NOTIFICATION_1" />
            </div>
          </div>
          <Carousel
            refCarousel={refCarousel}
            refFirstItem={refFirstItem}
            refLastItem={refLastItem}
            prevBtn={<ArrowLeft />}
            nextBtn={<ArrowRight />}
          >
            <div ref={refCarousel} className={styles.channelTabbedHeader}>
              {channelHeaderOptions.map((option, index, array) => {
                return (
                  <Link
                    ref={
                      index === array.length - 1
                        ? refLastItem
                        : index === 0
                        ? refFirstItem
                        : null
                    }
                    key={index}
                    className={`${styles.channelTabbedItem} ${
                      option.url === section
                        ? styles.channelTabbedItemActive
                        : ""
                    }`}
                    to={`/channel/${channelId}/${option.url}`}
                  >
                    {option.label}
                  </Link>
                );
              })}
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.channelWrapper}>
        <div className={styles.channelSectionsContainer}>
          <Switch>
            <Route exact path="/channel/:channelId">
              <ChannelHome
                channelId={channelId}
                menuContent={MENU_VIDEO_CARD}
              />
            </Route>
            <Route path="/channel/:channelId/videos">
              <ChannelVideos
                channelId={channelId}
                menuContent={MENU_VIDEO_CARD}
              />
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
        </div>
      </div>
    </>
  );
}

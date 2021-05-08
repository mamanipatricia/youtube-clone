import { Link, useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useEffect, useState } from "react";
import styles from "./Channel.module.css";
import Icon from "../Icon/Icon";
import { youTubeService } from "../../services/YouTubeService";
import ChannelSections from "../ChannelSections/ChannelSections";

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
  const [channel, setChannel] = useState({});
  const [channelSections, setChannelSections] = useState([]);
  const channelHeaderOptions = [
    "START",
    "VIDEOS",
    "PLAYLIST",
    "COMMUNITY",
    "CHANNELS",
    "MORE INFORMATION",
  ];

  const getChannel = async () => {
    const { data } = await youTubeService.getChannel(channelId);
    setChannel(data);
  };

  useEffect(() => {
    getChannel(channelId);
  }, []);

  const getChannelSections = async () => {
    return await youTubeService.getChannelSections(channelId);
  };

  const getPlaylistData = async () => {
    const { data } = await getChannelSections();
    return data;
  };

  const getPlaylistInfo = async (playlistsIDs) => {
    const { data } = await youTubeService.getPlaylists(playlistsIDs);
    const playlistInfo = {};
    data.forEach((item) => {
      playlistInfo[item.id] = item;
    });
    return playlistInfo;
  };

  const getChannelSections1 = async () => {
    const playlistData = await getPlaylistData();
    // from prev object get the keys [id, id, id,...]
    const playlistsIDs = Object.keys(playlistData);
    const playListInfoData = await getPlaylistInfo(playlistsIDs);

    Object.entries(playlistData).forEach(([playlistId, playlist]) => {
      playlist.details = playListInfoData[playlistId];
      if (playlist.section.type === "singleplaylist") {
        playlist.section.description = playlist.details?.description;
        playlist.section.title = playlist.details?.title;
      }
    });

    await Promise.all(
      Object.entries(playlistData)
      .map(async ([playlistId, playlist]) => {
        const resp = await youTubeService.getPlayListItems(playlistId);
        const videosId = resp.items?.map(
          (video) => video.snippet.resourceId.videoId
        );
        let { data } = await youTubeService.getVideos(videosId);
        return { [playlistId]: data };
      })
    ).then((values) => {
      values.forEach((playlist) => {
        const [[key, value]] = Object.entries(playlist); // [[id, {}]]
        playlistData[key].items = value;
      });
    });
    // GROUP BY POSITION
    const objFormatted = Object.values(playlistData).reduce((acc, cur) => {
      const { details, section } = cur;
      let items = [];
      if (section.type !== "singleplaylist") {
        items = acc[section.position]?.items || [];
        items.push({ ...details, items: cur.items });
      } else {
        items = cur.items;
      }
      acc[section.position] = {
        section: section,
        items: items,
      };
      return acc;
    }, []);
    return objFormatted;
  };

  useEffect(() => {
    (async () => {
      const channelSections = await getChannelSections1();
      setChannelSections(channelSections);
    })();
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
      </div>
      <ChannelSections videos={channelSections} />
    </>
  );
}

import { Link, useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useEffect, useState } from "react";
import styles from "./Channel.module.css";
import Icon from "../Icon/Icon";
import { youTubeService } from "../../services/YouTubeService";
import ChannelSections from "../ChannelSections/ChannelSections";

export function Owner({ owner }) {
  const { id, channelName } = owner;

  return (
    <Link
      className={styles.ownerChannelName}
      to={`/channel/${id}`}
      title={channelName}
    >
      {channelName}
      <span className={styles.iconContainer}>
        <Icon name="CHECK_CIRCLE_THICK" />
      </span>
    </Link>
  );
}

export function Subscribers(props) {
  const { owner } = props;
  const { subscribers } = owner;

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
    const response = await youTubeService.getChannel(channelId);
    if (response.pageInfo.totalResults > 0) {
      const channelData = {
        id: channelId,
        avatar: response.items[0].snippet.thumbnails.high.url,
        banner: response.items[0].brandingSettings.image?.bannerExternalUrl,
        channelName: response.items[0].brandingSettings.channel.title,
        subscribers: response.items[0].statistics.subscriberCount,
      };
      setChannel(channelData);
    }
  };
  useEffect(() => {
    getChannel(channelId);
  }, []);

  const getChannelSections = async () => {
    const res = await youTubeService.getChannelSections(channelId);
    return res;
  };

  const getPlaylistData = async () => {
    const res = await getChannelSections();
    const playListObj = {};
    res.items?.forEach((item) => {
      //! TODO - type: "multiplechannels"
      if (["singleplaylist", "multipleplaylists"].includes(item.snippet.type)) {
        item.contentDetails.playlists.forEach((itemPlayListID) => {
          playListObj[itemPlayListID] = {
            section: {
              position: item.snippet.position,
              //! todo fix when title undefined
              title: item.snippet.title || "",
              description: "",
              type: item.snippet.type,
            },
          };
        });
      }
    });
    return playListObj;
  };

  const getPlaylistInfo = async (playlistsIDs) => {
    const playListItemsData = await youTubeService.getPlayLists(playlistsIDs);
    const playlistInfo = {};
    playListItemsData.items.map((item) => {
      playlistInfo[item.id] = {
        thumbnail: item.snippet.thumbnails.medium.url,
        count: item.contentDetails.itemCount,
        title: item.snippet.title,
        localized: item.snippet.localized,
        owner: {
          id: item.id,
          channelName: item.snippet.channelTitle,
        },
        description: item.snippet.description,
        id: item.id,
      };
    });
    return playlistInfo;
  };

  const getChannelSections1 = async (channelId) => {
    const playlistData = await getPlaylistData();
    // from prev object get the keys [id, id, id,...]
    const playlistsIDs = Object.keys(playlistData);
    const playListInfoData = await getPlaylistInfo(playlistsIDs);

    Object.entries(playlistData).forEach(([playlistId, playlist]) => {
      playlist.details = playListInfoData[playlistId];
      if (playlist.section.type === "singleplaylist") {
        playlist.section.description = playlist.details.description;
        playlist.section.title = playlist.details.title;
      }
    });

    await Promise.all(
      Object.entries(playlistData)
        .filter(
          ([playlistId, playlist]) => playlist.section.type === "singleplaylist"
        )
        .map(async ([playlistId, playlist]) => {
          const resp = await youTubeService.getPlayListItems(playlistId);
          const videosId = resp.items.map(
            (video) => video.snippet.resourceId.videoId
          );
          let videosData = await youTubeService.getVideos(videosId);
          videosData = videosData.items.map((video) => {
            return {
              id: video.id,
              title: video.snippet.title,
              owner: {
                id: video.snippet.channelId,
                channelName: video.snippet.channelTitle,
              },
              thumbnail: video.snippet.thumbnails.high.url,
              views: video.statistics.viewCount,
              publishedAt: video.snippet.publishedAt,
              duration: video.contentDetails.duration,
            };
          });
          return { [playlistId]: videosData };
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
        items.push(details);
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
      const channelSections = await getChannelSections1(channelId);
      setChannelSections(channelSections);
    })();
  }, []);

  if (!channel.id) {
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
      </div>
      <ChannelSections videos={channelSections} />
    </>
  );
}

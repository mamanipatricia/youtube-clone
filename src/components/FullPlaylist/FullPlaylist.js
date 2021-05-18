import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { youTubeService } from "../../services/YouTubeService";
import { ChannelInfo } from "../ChannelInfo/ChannelInfo";
import { HorizontalVideoItem } from "../HorizontalVideoItem/HorizontalVideoItem";
import MoreActions from "../MoreActions/MoreActions";
import Icon from "../Icon/Icon";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./FullPlaylist.module.css";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useLoading } from "../../hooks/useLoading";

const playIcon = "\u25B6 "; // redo

const menuPlaylistItem = [
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
const menuPlaylist = [
  {
    id: 1,
    label: "Report Playlist",
    icon: "REPORT",
  },
];

export const FullPlaylist = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const listId = query.get("list");
  const [playlist, setPlaylist] = useState({});
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState({});

  const loading = useLoading();

  const getPlayListItems = async () => {
    try {
      loading.pending();
      const { data } = await youTubeService.getPlaylists(listId);
      setPlaylist(data[0]);
      const playlistItemResponse = await youTubeService.getPlayListItems(
        listId
      );
      const videosId = playlistItemResponse.items?.map(
        (video) => video.contentDetails.videoId
      );
      const { data: videosData } = await youTubeService.getVideos(videosId);
      setVideos(videosData);
      const { data: channelData } = await youTubeService.getChannel(
        data[0].channel?.channelId
      );
      setChannel(channelData);
      loading.success();
    } catch (err) {
      loading.error();
    }
  };
  useEffect(() => {
    if (listId) {
      getPlayListItems(listId);
    }
  }, [listId]);

  return (
    <div className={styles.playlistContainer}>
      {loading.isPending && <Spinner />}
      {loading.isSuccess && (
        <>
          <div className={`custom-scroll ${styles.playlistSidebarContainer}`}>
            <Link to={`/watch/${videos[0]?.videoId}?list=${listId}`}>
              <div className={styles.thumbnailContainer}>
                <Thumbnail url={playlist.thumbnail} />
                <div className={styles.playlistCovered}>
                  {playIcon} PLAY ALL
                </div>
              </div>
            </Link>
            <p className={styles.title}>{playlist.title}</p>
            <p className={styles.count}>
              {playlist.count} vídeos
              {/* 52.845 visualizacionesActualizado por última vez el 4 ene 2021*/}
            </p>
            <div className={styles.iconsContainer}>
              <Icon name="SAVE_PLAYLIST" color="var(--text-sentiment)" />
              <Icon name="SHUFFLE" color="var(--text-sentiment)" />
              <Icon name="SHARE" color="var(--text-sentiment)" />
              <MoreActions
                menuContent={menuPlaylist}
                direction="horizontal"
                position="left"
              />
            </div>
            <p className={styles.description}>{playlist.description}</p>
            <div>
              <ChannelInfo channel={channel} />
            </div>
          </div>
          <div className={`custom-scroll ${styles.playlistItemsContainer}`}>
            <div className={`${styles.playlistBrowserResult}`}>
              {videos.map((video, idx) => {
                return (
                  <div
                    key={video.videoId}
                    className={styles.playlistItemContainer}
                  >
                    <div className={styles.playlistItem}>
                      <div className={styles.indexPlaylistItem}>{idx + 1}</div>
                      <HorizontalVideoItem
                        video={video}
                        playlistId={listId}
                        index={idx}
                      />
                    </div>
                    <div className={styles.moreActions}>
                      <MoreActions menuContent={menuPlaylistItem} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

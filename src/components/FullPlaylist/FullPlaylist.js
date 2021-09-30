import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { youTubeService } from "../../services";
import { ChannelInfo } from "../ChannelInfo/ChannelInfo";
import { HorizontalVideoItem } from "../HorizontalVideoItem/HorizontalVideoItem";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import Icon from "../Icon/Icon";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./FullPlaylist.module.css";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useLoading } from "../../hooks/useLoading";
import { MENU_PLAYLIST_ITEM, MENU_PLAYLIST } from "../Constants/Constants";

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
      console.log(`err`, err);
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
                  <Icon name="PLAY" color="white" />
                  PLAY ALL
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
              <DropdownMenu
                name="MENU"
                menuContent={MENU_PLAYLIST}
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
                      <DropdownMenu
                        name="MENU"
                        menuContent={MENU_PLAYLIST_ITEM}
                      />
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

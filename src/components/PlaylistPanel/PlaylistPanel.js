import React, { useEffect, useState } from "react";
import { youTubeService } from "../../services/YouTubeService";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "../Icon/Icon";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./PlaylistPanel.module.css";
import { HorizontalVideoItem } from "../HorizontalVideoItem/HorizontalVideoItem";

export default function PlaylistPanel() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const listId = query.get("list");
  const index = query.get("index") || 1;
  const history = useHistory();

  const [videos, setVideos] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const getPlaylistItems = async () => {
    const playlistItems = await youTubeService.getPlayListItems(listId);
    let videosId = [];
    const playlistData = playlistItems.items?.map((video) => {
      videosId.push(video.contentDetails.videoId);
      return {
        playlistId: video.snippet.playlistId,
        videoId: video.contentDetails.videoId,
        position: video.snippet.position,
      };
    });
    const { data } = await youTubeService.getVideos(videosId);
    const videosInfo = playlistData.map((playlist) => {
      return data.find((video) => video.videoId === playlist.videoId);
    });
    const { data: playlistInfo } = await youTubeService.getPlaylists(listId);
    setPlaylist(playlistInfo[0]);
    setVideos(videosInfo);
  };

  useEffect(() => {
    if (listId) {
      getPlaylistItems();
    }
  }, [index]);

  const videoPositionHandle = (videoId, newIndex) => {
    history.push({
      pathname: `/watch/${videoId}`,
      search: `?list=${listId}&index=${newIndex}`,
    });
  };

  if (!listId) return null;

  return (
    <div className={styles.playlistContainer}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTopRow}>
            <div className={styles.headerDescription}>
              <h3>{playlist.title}</h3>
              <div>
                <span>{playlist.channel?.channelName}</span>
                <span>
                  -{index}/{playlist.count}
                </span>
              </div>
            </div>
            <div className={styles.expandIcon}>
              <Icon name="CHEVRON_UP" color="var(--bg-sentiment)" />
            </div>
          </div>
          <div className={styles.playlistActions}>
            <div className={styles.playlistActionMenu}>
              <Icon name="LOOP" color="var(--bg-sentiment)" />
              <Icon name="SHUFFLE" color="var(--bg-sentiment)" />
            </div>
            <div className={styles.saveButton}>
              <Icon name="SAVE_PLAYLIST" color="var(--bg-sentiment)" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.playlistItemsContainer} custom-scroll`}>
        {videos.map((video, idx) => {
          return (
            <div
              onClick={() => videoPositionHandle(video.videoId, idx + 1)}
              className={`${styles.playlistItem} ${
                idx + 1 === +index ? styles.playlistItemActive : ""
              }`}
            >
              <div className={styles.indexPlaylistItem}>{idx + 1}</div>

              <HorizontalVideoItem videos={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

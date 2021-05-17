import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { youTubeService } from "../../services/YouTubeService";
import Avatar from "../Avatar/Avatar";
import { ChannelInfo } from "../ChannelInfo/ChannelInfo";
import { Title } from "../Detail/Detail";
import HorizontalVideoCards from "../HorizontalVideoCards/HorizontalVideoCards";
import { HorizontalVideoItem } from "../HorizontalVideoItem/HorizontalVideoItem";
import Icon from "../Icon/Icon";
import { MoreActions } from "../MoreActions/MoreActions";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./FullPlaylist.module.css";

export const FullPlaylist = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const listId = query.get("list");
  const [playlist, setPlaylist] = useState({});
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState({});

  const getPlayListItems = async () => {
    const { data } = await youTubeService.getPlaylists(listId);
    setPlaylist(data[0]);
    const playlistItemResponse = await youTubeService.getPlayListItems(listId);
    const videosId = playlistItemResponse.items?.map(
      (video) => video.contentDetails.videoId
    );
    const { data: videosData } = await youTubeService.getVideos(videosId);
    setVideos(videosData);
    const { data: channelData } = await youTubeService.getChannel(
      data[0].channel?.channelId
    );
    setChannel(channelData);
  };
  useEffect(() => {
    if (listId) {
      getPlayListItems(listId);
    }
  }, [listId]);

  return (
    <div className={styles.playlistContainer}>
      <div className={`custom-scroll ${styles.playlistSidebarContainer}`}>
        <Thumbnail url={playlist.thumbnail} />
        <Title title={playlist.title} />
        <div>
          {playlist.count} vídeos
          {/* 52.845 visualizacionesActualizado por última vez el 4 ene */}
          2021
        </div>
        <div>
          <Icon name="SAVE_PLAYLIST" />
          <Icon name="SHUFFLE" />
          <Icon name="SHARE" />
          <Icon name="MENU" />
        </div>
        <p>{playlist.description}</p>
        <div>
          <hr />
          <ChannelInfo channel={channel} />
        </div>
      </div>
      <div className={`custom-scroll ${styles.playlistBrowserResult}`}>
        {videos.map((video, idx) => {
          return (
            <div key={video.videoId} className={styles.playlistItem}>
              <HorizontalVideoItem video={video} index={idx} />
              {/* <MoreActions direction="horizontal" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

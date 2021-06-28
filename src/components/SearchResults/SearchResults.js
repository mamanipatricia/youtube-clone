import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useLoading } from "../../hooks/useLoading";
import { youTubeService } from "../../services";
import Spinner from "../Spinner/Spinner";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./SearchResults.module.css";
import { MENU_SEARCH_RESULT } from "../Constants/Constants";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search_query");
  const [videos, setVideos] = useState([]);

  const loading = useLoading();

  const getSearch = async () => {
    try {
      loading.pending();
      const {
        data: { channelsId, videosId },
      } = await youTubeService.getSearch(searchQuery);
      const { data: channelsData } = await youTubeService.getChannels(
        channelsId
      );
      const { data: videosData } = await youTubeService.getVideos(videosId);
      const data = videosData.map((video) => {
        const channelId = video.channel.channelId;
        const channelInfo = channelsData.find(
          (channel) => channel.channelId === channelId
        );
        return { ...video, channel: channelInfo };
      });
      setVideos(data);
      loading.success();
    } catch (err) {
      loading.error();
    }
  };

  useEffect(() => {
    if (searchQuery) {
      getSearch();
    }
  }, [searchQuery]);

  return (
    <div className={styles.searchResultsContainer}>
      {loading.isPending && <Spinner />}
      {loading.isSuccess &&
        videos.map((video, index) => {
          return (
            <VideoCard
              key={`index-${index}`}
              video={video}
              direction="horizontal"
              menuContent={MENU_SEARCH_RESULT}
            />
          );
        })}
    </div>
  );
}

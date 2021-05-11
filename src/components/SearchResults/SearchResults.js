import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { youTubeService } from "../../services/YouTubeService";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search_query");
  const [videos, setVideos] = useState([]);

  const getSearch = async () => {
    const {
      data: { channelsId, videosId },
    } = await youTubeService.getSearch(searchQuery);
    const { data: channelsData } = await youTubeService.getChannels(channelsId);
    const { data: videosData } = await youTubeService.getVideos(videosId);
    const data = videosData.map((video) => {
      const channelId = video.channel.channelId;
      const channelInfo = channelsData.find(
        (channel) => channel.channelId === channelId
      );
      return { ...video, channel: channelInfo };
    });
    setVideos(data);
  };

  useEffect(() => {
    if (searchQuery) {
      getSearch();
    }
  }, [searchQuery]);

  return (
    <div className={styles.searchResultsContainer}>
      {videos.map((video, index) => {
        return (
          <VideoCard
            key={`index-${index}`}
            video={video}
            direction="horizontal"
          />
        );
      })}
    </div>
  );
}

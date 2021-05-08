import React, { useEffect, useState } from "react";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import VideoCards from "../VideoCards/VideoCards";
import styles from "./Home.module.css";
import { youTubeService } from "../../services/YouTubeService";

export default function Home() {
  const [search, setSearch] = useState([]);
  const getSearch = async (keyword) => {
    const { data } = await youTubeService.getSearch(keyword);
    return data;
  };

  useEffect(() => {
    (async () => {
      const { channelsId, videosId } = await getSearch("reactjs");
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
      setSearch(data);
    })();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.feedFilterContainer}>
        <FeedFilterBarRenderer />
      </div>
      <VideoCards videos={search} />
    </div>
  );
}

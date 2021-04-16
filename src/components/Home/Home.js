import React, { useEffect, useState } from "react";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import VideoCards from "../VideoCards/VideoCards";
import styles from "./Home.module.css";
import { youTubeService } from "../../services/YouTubeService";

export default function Home() {
  const [search, setSearch] = useState([]);

  const filterSearchData = (data) => {
    const channels = [];
    const videoSearch = data.items
      .filter((video) => video.id.kind === "youtube#video")
      .map((video) => {
        channels.push(video.snippet.channelId);
        return {
          id: video.id.videoId,
          title: video.snippet.title,
          views: 0,
          url: video.snippet.thumbnails.default.url,
          owner: {},
          timestamp: video.snippet.publishedAt,
          channelId: video.snippet.channelId,
        };
      });

    return { videoSearch, channels };
  };

  const getSearch = async (keyword) => {
    const data = await youTubeService.getSearch(keyword);
    return filterSearchData(data);
  };

  useEffect(() => {
    (async () => {
      const { videoSearch: videos, channels } = await getSearch("javascript");
      const channelsData = await youTubeService.getChannels(channels);
      const data = videos.map((video) => {
        const channelId = video.channelId;
        const res = channelsData.items.find(
          (channel) => channel.id === channelId
        );
        const owner = {
          id: res.id,
          channelName: res.snippet.title,
          avatar: res.snippet.thumbnails.default.url,
        };
        return { ...video, owner: owner };
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

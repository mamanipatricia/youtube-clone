import React, { useEffect, useState } from "react";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import VideoCards from "../VideoCards/VideoCards";
import styles from "./Home.module.css";
import { youTubeService } from "../../services/YouTubeService";

export default function Home() {
  const [search, setSearch] = useState([]);

  const filterSearchData = (data) => {
    const channels = [];
    const videosId = [];
    const videoSearch = data.items
      .filter((video) => video.id.kind === "youtube#video")
      .map((video) => {
        channels.push(video.snippet.channelId);
        videosId.push(video.id.videoId);
        return {
          id: video.id.videoId,
          title: video.snippet.title,
          views: 0,
          url: video.snippet.thumbnails.high.url,
          owner: {},
          timestamp: video.snippet.publishedAt,
          channelId: video.snippet.channelId,
        };
      });

    return { videoSearch, channels, videosId };
  };

  const getSearch = async (keyword) => {
    const data = await youTubeService.getSearch(keyword);
    return filterSearchData(data);
  };
  const filterVideos = (data) => {
    const videos = data.items.map((video) => {
      return {
        videoId: video.id,
        viewCount: video.statistics.viewCount,
        duration: video.contentDetails.duration,
      };
    });
    return videos;
  };
  useEffect(() => {
    (async () => {
      const { videoSearch: videos, channels, videosId } = await getSearch(
        "javascript"
      );
      const channelsData = await youTubeService.getChannels(channels);
      const videosData = await youTubeService.getVideos(videosId);
      const videosDataFiltered = filterVideos(videosData);
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
      // adding viewCount video to res
      const response = data.map((item) => {
        const id = item.id;
        const res = videosDataFiltered.find((video) => video.videoId === id);
        return { ...item, views: res.viewCount, duration: res.duration };
      });
      setSearch(response);
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

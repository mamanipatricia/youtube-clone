import React, { useEffect, useState } from "react";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import VideoCards from "../VideoCards/VideoCards";
import styles from "./Home.module.css";
import { youTubeService } from "../../services/YouTubeService";
import Spinner from "../Spinner/Spinner";
import { useLoading } from "../../hooks/useLoading";

export default function Home() {
  const [search, setSearch] = useState([]);

  const loading = useLoading();

  const getSearch = async (keyword) => {
    const { data } = await youTubeService.getSearch(keyword);
    return data;
  };

  useEffect(() => {
    (async () => {
      try {
        const { channelsId, videosId } = await getSearch("reactjs");
        const { data: channelsData } = await youTubeService.getChannels(
          channelsId
        );
        loading.pending();
        const { data: videosData } = await youTubeService.getVideos(videosId);
        const data = videosData.map((video) => {
          const channelId = video.channel.channelId;
          const channelInfo = channelsData.find(
            (channel) => channel.channelId === channelId
          );
          return { ...video, channel: channelInfo };
        });
        setSearch(data);
        loading.success();
      } catch (err) {
        console.log(`err`, err);
        loading.error();
      }
    })();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.feedFilterContainer}>
        <FeedFilterBarRenderer />
      </div>
      {loading.isPending && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {loading.isSuccess && <VideoCards videos={search} />}
    </div>
  );
}

import { useEffect, useState } from "react";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import styles from "./Home.module.css";
import { youTubeService } from "../../services/YouTubeService";
import Spinner from "../Spinner/Spinner";
import { useLoading } from "../../hooks/useLoading";
import VideoCard from "../VideoCard/VideoCard";

const menuHome = [
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
  {
    id: 4,
    label: "Not interested",
    icon: "NOT_ALLOWED",
  },
  {
    id: 5,
    label: "Don't recommended channel",
    icon: "MINUS_CIRCLE",
  },
  {
    id: 4,
    label: "Report",
    icon: "REPORT",
  },
];

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
      <div className={styles.videosContainer}>
        {loading.isSuccess &&
          search.map((video) => {
            return <VideoCard video={video} menuContent={menuHome} />;
          })}
      </div>
    </div>
  );
}

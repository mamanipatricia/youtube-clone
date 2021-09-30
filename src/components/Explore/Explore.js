import { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { useLoading } from "../../hooks/useLoading";
import Spinner from "../Spinner/Spinner";
import styles from "./Explore.module.css";
import music from "../../assets/images/music.png";
import gaming from "../../assets/images/gaming.png";
import learning from "../../assets/images/learning.png";
import sports from "../../assets/images/sports.png";
import { youTubeService } from "../../services";
import { MENU_SEARCH } from "../Constants/Constants";

const destinationsList = [
  {
    label: "Music",
    image: music,
    url: "#",
  },
  {
    label: "Gaming",
    image: gaming,
    url: "#",
  },
  {
    label: "Learning",
    image: learning,
    url: "#",
  },
  {
    label: "Sports",
    image: sports,
    url: "#",
  },
];

export default function Explore() {
  const loading = useLoading();
  const [videos, setVideos] = useState([]);

  const getTrendingVideos = async () => {
    try {
      loading.pending();
      const {
        data: { channelsId, videosId },
      } = await youTubeService.getTrendingVideos();
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
      console.log(`err`, err);
      loading.error();
    }
  };

  useEffect(() => {
    getTrendingVideos();
  }, []);

  return (
    <div className={styles.destinationsContainer}>
      <div className={styles.boxContainer}>
        {destinationsList.map((destination, index) => {
          return (
            <div key={`dest${index}`} className={styles.box}>
              <img
                className={styles.image}
                alt={destination.label}
                src={destination.image}
              />
              <span className={styles.label}>{destination.label}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h3 className={styles.itemsTitle}>Trending videos</h3>
        <div className={styles.searchResultsContainer}>
          {loading.isPending && <Spinner />}
          {loading.isSuccess &&
            videos.map((video, index) => {
              return (
                <VideoCard
                  key={`index-${index}`}
                  video={video}
                  direction="horizontal"
                  menuContent={MENU_SEARCH}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { youTubeService } from "../../services/YouTubeService";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import HorizontalVideoCard from "../HorizontalVideoCards/HorizontalVideoCard./HorizontalVideoCard";
import styles from "./RelatedVideosContainer.module.css";

const menuRelatedVideos = [
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
    icon: "SAVE_PLAYLIST",
  },
  {
    id: 5,
    label: "Report",
    icon: "REPORT",
  },
];

export default function RelatedVideos({ videoId }) {
  const [relatedVideosData, setRelatedVideosData] = useState([]);
  const [searchClone, setSearchClone] = useState([]);

  const getSearch = async (keyword) => {
    const { data } = await youTubeService.getSearch(keyword);
    return data;
  };

  const getVideosSearch = async (keyword) => {
    try {
      const { videosId } = await getSearch(keyword);
      const { data: videosData } = await youTubeService.getVideos(videosId);
      setRelatedVideosData(videosData);
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    if (searchClone.length === 0) {
      setSearchClone(relatedVideosData);
    }
  }, [relatedVideosData]);

  const onChangeFeed = (feed) => {
    if (feed === "All") {
      setRelatedVideosData(searchClone);
      return;
    }
    getVideosSearch(feed);
  };

  const getRelatedVideos = async () => {
    const { data: relatedVideos } = await youTubeService.getRelatedVideos(
      videoId
    );
    const videoIds = [];
    relatedVideos.forEach((video) => {
      videoIds.push(video.videoId);
    });

    const { data: videos } = await youTubeService.getVideos(videoIds);

    relatedVideos.forEach((relatedVideo) => {
      videos.forEach((videoItem) => {
        if (videoItem.videoId === relatedVideo.videoId) {
          relatedVideo.viewCount = videoItem.viewCount;
        }
      });
    });
    setRelatedVideosData(relatedVideos);
  };

  useEffect(() => {
    getRelatedVideos();
  }, []);

  return (
    <div className={styles.relatedVideosContainer}>
      <FeedFilterBarRenderer onChangeFeed={onChangeFeed} />
      {relatedVideosData.map((video) => {
        return (
          <HorizontalVideoCard
            key={`index-${video.videoId}`}
            video={video}
            direction="row"
            menuContent={menuRelatedVideos}
          />
        );
      })}
    </div>
  );
}

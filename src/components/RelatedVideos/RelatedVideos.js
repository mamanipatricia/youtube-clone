import React, { useEffect, useState, useCallback } from "react";
import { youTubeService } from "../../services";
import { useVideo } from "../../context/videoContext";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import HorizontalVideoCard from "../HorizontalVideoCards/HorizontalVideoCard/HorizontalVideoCard";
import styles from "./RelatedVideosContainer.module.css";
import { MENU_RELATED_VIDEOS } from "../Constants/Constants";

const RelatedVideos = ({ videoId }) => {
  const { dispatch } = useVideo();

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
    // useEffect cleanup function
    return () => {
      setSearchClone([]);
    };
  }, [relatedVideosData]);

  const onChangeFeed = (feed) => {
    if (feed === "All") {
      setRelatedVideosData(searchClone);
      return;
    }
    getVideosSearch(feed);
  };

  const getRelatedVideos = useCallback(async () => {
    const { data: relatedVideos } = await youTubeService.getRelatedVideos(
      videoId
    );
    const videoIds = relatedVideos.map((video) => video.videoId);
    const { data: videos } = await youTubeService.getVideos(videoIds);
    dispatch({ type: "NEXT_VIDEO", nextVideoId: videos[0].videoId });
    setRelatedVideosData(videos);
  }, [videoId]);

  useEffect(() => {
    getRelatedVideos();
  }, [getRelatedVideos]);

  return (
    <div className={styles.relatedVideosContainer}>
      <FeedFilterBarRenderer onChangeFeed={onChangeFeed} />
      {relatedVideosData.map((video) => {
        return (
          <HorizontalVideoCard
            ownerCustomStyles={{ color: "var(--text-secondary)" }}
            key={`index-${video.videoId}`}
            video={video}
            direction="row"
            menuContent={MENU_RELATED_VIDEOS}
          />
        );
      })}
    </div>
  );
};

export default RelatedVideos;

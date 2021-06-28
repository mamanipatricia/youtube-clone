import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { youTubeService } from "../../services";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import HorizontalVideoCard from "../HorizontalVideoCards/HorizontalVideoCard./HorizontalVideoCard";
import styles from "./RelatedVideosContainer.module.css";
import { MENU_RELATED_VIDEOS } from "../Constants/Constants";

const RelatedVideos = ({ videoId, playingStatus }) => {
  const history = useHistory();

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
    const videoIds = relatedVideos.map((video) => video.videoId);
    const { data: videos } = await youTubeService.getVideos(videoIds);
    setRelatedVideosData(videos);
  };

  useEffect(() => {
    getRelatedVideos();
  }, []);

  useEffect(() => {
    if (playingStatus === "nextVideo") {
      history.push({
        pathname: `/watch/${relatedVideosData[0]?.videoId}`,
        state: { videoStatus: "playingVideo" },
      });
    }
  }, [playingStatus]);

  return (
    <div className={styles.relatedVideosContainer}>
      <FeedFilterBarRenderer onChangeFeed={onChangeFeed} />
      {relatedVideosData.map((video) => {
        return (
          <HorizontalVideoCard
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

// export default RelatedVideos;
export default React.memo(RelatedVideos, (prevProps, nextProps) => {
  const res =
    prevProps.playingStatus === nextProps.playingStatus &&
    prevProps.videoId === nextProps.videoId;
  // console.log(`res:`, res);
  // console.log(
  //   `prev:`,
  //   prevProps.playingStatus,
  //   nextProps.playingStatus,
  //   prevProps.videoId,
  //   nextProps.videoId
  // );
  return res;
});

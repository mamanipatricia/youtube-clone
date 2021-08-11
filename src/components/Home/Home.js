import { useState, useEffect, useRef } from "react";
import { commentService, userService, youTubeService } from "../../services";
import { useLoading } from "../../hooks/useLoading";
import { useGuide } from "../../context/guideContext";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";
import VideoCard from "../VideoCard/VideoCard";
import Spinner from "../Spinner/Spinner";
import styles from "./Home.module.css";
import { MENU_HOME } from "../Constants/Constants";
import { useAuth } from "../../context/authContext";

const INITIAL_KEYWORD = "Docker";

export default function Home() {
  const loading = useLoading();
  const { setStarted } = useAuth();
  const [toggleSidebarRow] = useGuide();
  const [search, setSearch] = useState([]);
  const [searchClone, setSearchClone] = useState([]);
  const [isNearScreen, setIsNearScreen] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const [nextPageTokenCopy, setNextPageTokenCopy] = useState("");
  const [keyword, setKeyword] = useState(INITIAL_KEYWORD);
  const nearScreenRef = useRef(null);

  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const near = nearScreenRef.current;
    let options = {
      threshold: 0.5,
    };
    let observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsNearScreen(entry.isIntersecting);
    }, options);
    if (near) {
      observer.observe(near);
    }
    return () => {
      if (near) {
        observer.unobserve(near);
      }
    };
  }, []);

  useEffect(() => {
    if (isNearScreen && loadVideo) {
      getVideosSearch();
    }
  }, [isNearScreen, loadVideo]);

  const getSearch = async (keyword, params = {}) => {
    const { data, pageInfo } = await youTubeService.getSearch(keyword, params);
    if (!nextPageTokenCopy) {
      setNextPageTokenCopy(pageInfo.nextPageToken);
    }
    setNextPageToken(pageInfo.nextPageToken);
    return data;
  };

  const getVideosSearch = async () => {
    try {
      loading.pending();

      const params = {};
      if (nextPageToken) {
        params.pageToken = nextPageToken;
      }
      const { channelsId, videosId } = await getSearch(keyword, params);
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
      setSearch([...search, ...data]);
      setIsNearScreen(false);
      loading.success();
    } catch (err) {
      console.log(`err`, err);
      loading.error();
    }
  };

  useEffect(() => {
    if (searchClone.length === 0) {
      setSearchClone(search);
    }
  }, [search]);

  const onChangeFeed = (feed) => {
    setKeyword(feed);
    setSearch([]);
    setNextPageToken("");
    if (feed === "All") {
      setSearch(searchClone);
      setKeyword(INITIAL_KEYWORD);
      setNextPageToken(nextPageTokenCopy);
      return;
    }
  };

  const loadVideoHandle = () => {
    setLoadVideo(true);
    youTubeService.setStarted(true);
    commentService.setStarted(true);
    userService.setStarted(true);
    setStarted(true);
  };

  return (
    <div className={styles.homeContainer}>
      <div
        className={`${styles.feedFilterContainer} ${
          toggleSidebarRow ? styles.toggleToMiniGuide : null
        }`}
      >
        <FeedFilterBarRenderer onChangeFeed={onChangeFeed} />
      </div>

      {loadVideo ? (
        <>
          <div className={styles.videosContainer}>
            {search.map((video, index) => {
              return (
                <VideoCard
                  key={`video-${index}`}
                  video={video}
                  menuContent={MENU_HOME}
                />
              );
            })}
          </div>
        </>
      ) : (
        <button style={{ marginTop: "100px" }} onClick={loadVideoHandle}>
          CLICK TO LOAD VIDEOS
        </button>
      )}
      <div ref={nearScreenRef}>
        <Spinner visible={loadVideo} />
      </div>
    </div>
  );
}

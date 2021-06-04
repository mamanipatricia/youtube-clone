import { useState, useEffect } from "react";
import styles from "./Watch.module.css";
import YouTube from "react-youtube";
import Icon from "../Icon/Icon";

import { useParams } from "react-router-dom";
import { ViewsAndTimestamp } from "../Detail/Detail";
import { youTubeService } from "../../services/YouTubeService";
import Comments from "../Comments/Comments";
import PlaylistPanel from "../PlaylistPanel/PlaylistPanel";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import Spinner from "../Spinner/Spinner";
import { useLoading } from "../../hooks/useLoading";
import { ChannelInfo } from "../ChannelInfo/ChannelInfo";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import FeedFilterBarRenderer from "../FeedFilterBarRenderer/FeedFilterBarRenderer";

const menuWatch = [
  {
    id: 1,
    label: "Report",
    icon: "REPORT",
  },
];

export default function Watch() {
  let { videoId } = useParams();
  const [channel, setChannel] = useState("");
  const [video, setVideo] = useState({});
  const [commentsThreads, setCommentsThreads] = useState();
  const [totalResults, setTotalResults] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [relatedVideosData, setRelatedVideosData] = useState([]);
  const [errorComment, setErrorComment] = useState(false);

  const loading = useLoading();

  useEffect(() => {
    (async () => {
      try {
        loading.pending();
        const { data } = await youTubeService.getVideo(videoId);
        setVideo(data);
        loading.success();
      } catch (err) {
        loading.error();
        console.log(`err`, err);
      }
    })();
  }, [videoId]);

  const getChannel = async (channelId) => {
    const { data } = await youTubeService.getChannel(channelId);
    setChannel(data);
  };

  const getThreadsComments = async () => {
    try {
      const { data } = await youTubeService.getThreadsComments(videoId);
      const { commentThreadsData, totalResults } = data;
      setCommentsThreads(commentThreadsData);
      setTotalResults(totalResults);
    } catch (err) {
      if (err.message.includes("parameter has disabled comments")) {
        setErrorComment(true);
      }
    }
  };

  const getRelatedVideos = async () => {
    const { data } = await youTubeService.getRelatedVideos(videoId);
    setRelatedVideosData(data);
  };

  useEffect(() => {
    (async () => {
      if (video && video.videoId) {
        const {
          channel: { channelId },
        } = video;
        await getChannel(channelId);
        await getThreadsComments();
        await getRelatedVideos();
      }
    })();
  }, [video, videoId]);

  if (loading.isError) {
    const div = <div>VIDEO NOT FOUND</div>;
    return div;
  }

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const expandedHandle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.watchContainer}>
      {loading.isPending && <Spinner />}
      {loading.isSuccess && (
        <>
          <div className={styles.primary}>
            <div className={styles.playerContainer}>
              <YouTube
                containerClassName={styles.youtubePlayer}
                videoId={video.videoId}
                opts={opts}
              />
            </div>
            <div className={styles.watchInfoContainer}>
              <div className={styles.videoTitle}>
                <p>{video.title}</p>
              </div>
              <div className={styles.watchInfoButtonsContainer}>
                <span>
                  <ViewsAndTimestamp
                    viewCount={video.viewCount}
                    publishedAt={video.publishedAt}
                  />
                </span>
                <div className={styles.watchInfoButtons}>
                  <div>
                    <button>
                      <Icon name="LIKE_VIDEO" color="var(--bg-sentiment)" />
                    </button>
                    <span>{video.likeCount}</span>
                  </div>
                  <div className={styles.watchInfoLikeContainer}>
                    <button className={styles.watchInfoLikeButton}>
                      <Icon
                        className={styles.watchInfoLike}
                        name="LIKE_VIDEO"
                        color="var(--bg-sentiment)"
                      />
                    </button>
                    <span>{video.dislikeCount}</span>
                  </div>
                  <div>
                    <button>
                      <Icon name="SHARE" color="var(--bg-sentiment)" />
                    </button>
                    <span> SHARE</span>
                  </div>
                  <div>
                    <button>
                      <Icon name="SAVE" color="var(--bg-sentiment)" />
                    </button>
                    <span> SAVE</span>
                  </div>
                  <DropdownMenu name="MENU" menuContent={menuWatch} />
                </div>
              </div>
            </div>
            <div className={styles.metaContainer}>
              <div className={styles.channelInfo}>
                <ChannelInfo channel={channel} displaySubs={true} />
              </div>
              <div className={styles.watchInfo}>
                <div
                  className={
                    isExpanded
                      ? styles.watchContentInfoExpanded
                      : styles.watchContentInfoContainer
                  }
                >
                  <p className={styles.watchContentInfo}>{video.description}</p>
                </div>
                <div className={styles.watchShowMore}>
                  <button onClick={expandedHandle}>
                    {isExpanded ? "SHOW LESS" : "SHOW MORE"}
                  </button>
                </div>
              </div>
            </div>
            <div>
              {!errorComment ? (
                <Comments
                  comments={commentsThreads}
                  totalResults={totalResults}
                />
              ) : (
                "Comments are turned off"
              )}
            </div>
          </div>
          <div className={styles.secondary}>
            <PlaylistPanel />
            <RelatedVideos videos={relatedVideosData} />
          </div>
        </>
      )}
    </div>
  );
}

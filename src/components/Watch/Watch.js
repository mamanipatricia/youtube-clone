import React, { useState, useEffect } from "react";
import styles from "./Watch.module.css";
import YouTube from "react-youtube";
import { Subscribers, Owner } from "../Channel/Channel";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";

import { useParams } from "react-router-dom";
import { ViewsAndTimestamp } from "../Detail/Detail";
import { youTubeService } from "../../services/YouTubeService";
import Comments from "../Comments/Comments";
import PlaylistPanel from "../PlaylistPanel/PlaylistPanel";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

export default function Watch() {
  let { videoId } = useParams();
  const [channel, setChannel] = useState("");
  const [video, setVideo] = useState({});
  const [commentsThreads, setCommentsThreads] = useState();
  const [totalResults, setTotalResults] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [relatedVideosData, setRelatedVideosData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await youTubeService.getVideo(videoId);
        setVideo(data);
      } catch (err) {}
    })();
  }, [videoId]);

  const getChannel = async (channelId) => {
    const { data } = await youTubeService.getChannel(channelId);
    setChannel(data);
  };

  const getThreadsComments = async () => {
    const { data } = await youTubeService.getThreadsComments(videoId);
    const { commentThreadsData, totalResults } = data;
    setCommentsThreads(commentThreadsData);
    setTotalResults(totalResults);
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

  if (typeof video === "undefined") {
    const div = <div>VIDEO NOT FOUND</div>;
    return div;
  }
  if (!Object.prototype.hasOwnProperty.call(video, "videoId")) {
    const div = <div>loading...</div>;
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
      <div className={styles.primary}>
        <div className={styles.playerContainer}>
          <YouTube
            containerClassName={styles.youtubePlayer}
            onStateChange=""
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
                views={video.viewCount}
                timestamp={video.publishedAt}
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
              <div className={styles.watchInfoMenuContainer}>
                <button className={styles.watchInfoMenuButton}>
                  <Icon
                    className={styles.watchInfoMenu}
                    name="MENU"
                    color="var(--bg-sentiment)"
                  />
                </button>
              </div>
              <div>
                <button>
                  <Icon name="REPORT" color="var(--bg-sentiment)" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.metaContainer}>
          <div className={styles.watchMetaContainer}>
            <div className={styles.watchChannel}>
              <div className={styles.avatar}>
                <Avatar size="medium" channel={channel} />
              </div>
              <div className={styles.watchOwnerContainer}>
                <span className={styles.watchOwnerText}>
                  <Owner channel={channel} />
                </span>
                <span className={styles.watchOwnerSubscribers}>
                  <Subscribers channel={channel} />
                </span>
              </div>
            </div>
            <div className={styles.watchSubscribeContainer}>
              <button className={styles.watchSubscribe}>SUBSCRIBED</button>
              <Icon name="NOTIFICATION_1" color="var(--bg-sentiment)" />
            </div>
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
          <Comments comments={commentsThreads} totalResults={totalResults} />
        </div>
      </div>
      <div className={styles.secondary}>
        <PlaylistPanel />
        <RelatedVideos videos={relatedVideosData} />
      </div>
    </div>
  );
}

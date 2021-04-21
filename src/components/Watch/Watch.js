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

export default function Watch() {
  let { videoId } = useParams();
  const [channel, setChannel] = useState("");
  const [video, setVideo] = useState({});
  const [commentsThreads, setCommentsThreads] = useState();
  const [totalResults, setTotalResults] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await youTubeService.getVideo(videoId);
      setVideo(res.items[0]);
    })();
  }, []);

  const filterChannelData = (data) => {
    const channelData = {
      id: data.items[0].id,
      channelName: data.items[0].snippet.title,
      avatar: data.items[0].snippet.thumbnails.default.url,
      subscribers: data.items[0].statistics.subscriberCount,
    };
    setChannel(channelData);
  };

  const getChannel = async (channelId) => {
    const data = await youTubeService.getChannel(channelId);
    filterChannelData(data);
  };

  useEffect(() => {
    if (video && video.snippet) {
      const {
        snippet: { channelId },
      } = video;
      getChannel(channelId);
      getThreadsComments(videoId);
    }
  }, [video]);

  const filterCommentData = (data) => {
    const commentThreadsData = data.items.map((comment) => {
      return {
        owner: {
          id: comment.snippet.topLevelComment.snippet.authorChannelId.value,
          channelName:
            comment.snippet.topLevelComment.snippet.authorDisplayName,
          avatar: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        },
        authorContent: {
          authorProfileImageUrl:
            comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
          authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
          publishedAt: comment.snippet.topLevelComment.snippet.publishedAt,
          textOriginal: comment.snippet.topLevelComment.snippet.textOriginal,
          likeCount: comment.snippet.topLevelComment.snippet.likeCount,
          dislikeCount: comment.snippet.topLevelComment.snippet.likeCount,
          authorChannelId: "",
          totalReplyCount:
            comment.snippet.topLevelComment.snippet.totalReplyCount,
          updatedAt: "",
        },
      };
    });
    return { commentThreadsData, totalResults: data.pageInfo.totalResults };
  };
  const getThreadsComments = async (videoId) => {
    const data = await youTubeService.getThreadsComments(videoId);
    const { commentThreadsData, totalResults } = filterCommentData(data);
    setCommentsThreads(commentThreadsData);
    setTotalResults(totalResults);
  };

  if (typeof video === "undefined") {
    const div = <div>VIDEO NOT FOUND</div>;
    return div;
  }
  if (!Object.prototype.hasOwnProperty.call(video, "snippet")) {
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
            videoId={video.id}
            opts={opts}
          />
        </div>
        <div className={styles.watchInfoContainer}>
          <div className={styles.videoTitle}>
            <p>{video.snippet.title}</p>
          </div>
          <div className={styles.watchInfoButtonsContainer}>
            <span>
              <ViewsAndTimestamp
                views={video.statistics.viewCount}
                timestamp={video.snippet.publishedAt}
              />
            </span>
            <div className={styles.watchInfoButtons}>
              <div>
                <button>
                  <Icon name="LIKE_VIDEO" color="var(--bg-sentiment)" />
                </button>
                <span>{video.statistics.likeCount}</span>
              </div>
              <div className={styles.watchInfoLikeContainer}>
                <button className={styles.watchInfoLikeButton}>
                  <Icon
                    className={styles.watchInfoLike}
                    name="LIKE_VIDEO"
                    color="var(--bg-sentiment)"
                  />
                </button>
                <span>{video.statistics.dislikeCount}</span>
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
                <Avatar size="medium" owner={channel} />
              </div>
              <div className={styles.watchOwnerContainer}>
                <span className={styles.watchOwnerText}>
                  <Owner owner={channel} />
                </span>
                <span className={styles.watchOwnerSubscribers}>
                  <Subscribers owner={channel} />
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
              <p className={styles.watchContentInfo}>
                {video.snippet.description}
              </p>
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
      <div className={styles.secondary}>LIST SIMILAR VIDEOS</div>
    </div>
  );
}

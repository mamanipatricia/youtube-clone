import React, { useState, useEffect } from "react";
import styles from "./Watch.module.css";
import YouTube from "react-youtube";
import { Subscribers, Owner } from "../Channel/Channel";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";

import { useParams } from "react-router-dom";
import { ViewsAndTimestamp } from "../Detail/Detail";
import { youTubeService } from "../../services/YouTubeService";

export default function Watch() {
  let { videoId } = useParams();
  const [channel, setChannel] = useState("");
  const [video, setVideo] = useState({});

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
    if ("snippet" in video) {
      const {
        snippet: { channelId },
      } = video;
      getChannel(channelId);
    }
  }, [video]);

  if (!channel) {
    const div = <div>Channel not found</div>;
    return div;
  }

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
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
                  <Icon className={styles.watchInfoMenu} name="MENU" />
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
                  <span> subscribers</span>
                </span>
              </div>
            </div>
            <div className={styles.watchSubscribeContainer}>
              <button className={styles.watchSubscribe}>SUBSCRIBED</button>
              <Icon name="NOTIFICATION_1" color="var(--bg-sentiment)" />
            </div>
          </div>
          <div className={styles.watchInfo}>
            <p className={styles.watchContentInfo}>
              {video.snippet.description}
            </p>
            <div className={styles.watchShowMore}>
              <button>SHOW MORE</button>
            </div>
            {/* <div className={styles.watchShowMore}>
              <button>SHOW LESS</button>
            </div> */}
          </div>
        </div>
        <div>COMMENTS</div>
      </div>
      <div className={styles.secondary}>LIST SIMILAR VIDEOS</div>
    </div>
  );
}

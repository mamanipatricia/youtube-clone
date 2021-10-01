import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import YouTube from "react-youtube";
import { useVideo } from "../../context/videoContext";
import { useLoading } from "../../hooks/useLoading";
import { youTubeService } from "../../services";
import { ViewsAndTimestamp } from "../Detail/Detail";
import PlaylistPanel from "../PlaylistPanel/PlaylistPanel";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { ChannelInfo } from "../ChannelInfo/ChannelInfo";
import Comments from "../Comments/Comments";
import Spinner from "../Spinner/Spinner";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import { MENU_WATCH } from "../Constants/Constants";
import Icon from "../Icon/Icon";
import styles from "./Watch.module.css";

export default function Watch() {
  const loading = useLoading();
  const { state } = useVideo();
  const history = useHistory();
  const { videoId } = useParams();

  const [channel, setChannel] = useState("");
  const [video, setVideo] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

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

  useEffect(() => {
    (async () => {
      if (video && video.videoId) {
        const {
          channel: { channelId },
        } = video;
        await getChannel(channelId);
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
      controls: 1,
      enablejsapi: 1,
      host: "https://www.youtube.com",
      // origin: "http://localhost:3000",
      origin: "https://www.pattty.com",
    },
  };
  const expandedHandle = () => {
    setIsExpanded(!isExpanded);
  };

  function playNext(event) {
    // video is ended when "==0"
    if (event?.data === 0) {
      history.push({
        pathname: `/watch/${state.nextVideoId}`,
      });
    }
  }

  return (
    <div className={styles.watchContainer}>
      {loading.isPending && <Spinner />}
      {loading.isSuccess && (
        <>
          <div className={styles.primary}>
            <div>
              <div className={styles.playerContainer}>
                <YouTube
                  containerClassName={styles.youtubePlayer}
                  videoId={video.videoId}
                  onStateChange={(e) => playNext(e)}
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
                        <Icon
                          name="LIKE"
                          color="var(--bg-sentiment)"
                          className={{ width: "34px", height: "34px" }}
                        />
                      </button>
                      <span>{video.likeCount}</span>
                    </div>
                    <div>
                      <button>
                        <Icon name="DISLIKE" color="var(--bg-sentiment)" />
                      </button>
                      <span>{video.dislikeCount}</span>
                    </div>
                    <div>
                      <button>
                        <Icon name="SHARE" color="var(--bg-sentiment)" />
                      </button>
                      <span className={styles.hiddenLabel}> SHARE</span>
                    </div>
                    <div>
                      <button>
                        <Icon name="SAVE" color="var(--bg-sentiment)" />
                      </button>
                      <span className={styles.hiddenLabel}> SAVE</span>
                    </div>
                    <DropdownMenu
                      name="MENU"
                      menuContent={MENU_WATCH}
                      direction="horizontal"
                    />
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
                    <p className={styles.watchContentInfo}>
                      {video.description}
                    </p>
                  </div>
                  <div className={styles.watchShowMore}>
                    <button onClick={expandedHandle}>
                      {isExpanded ? "SHOW LESS" : "SHOW MORE"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.comments}>
              <Comments videoId={videoId} />
            </div>
          </div>
          <div className={styles.secondary}>
            <PlaylistPanel />
            {/* display 20 elem in responsive and add a button to show more videos */}
            <RelatedVideos videoId={videoId} />
          </div>
          <div className={styles.commentsAtTheBottom}>
            <Comments videoId={videoId} />
          </div>
        </>
      )}
    </div>
  );
}

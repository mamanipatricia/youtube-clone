import { useEffect, useRef, useState } from "react";
import { youTubeService } from "../../../services/YouTubeService";
import HorizontalPlaylistCard from "../../HorizontalPlaylistCard/HorizontalPlaylistCard";
import Icon from "../../Icon/Icon";
import styles from "./ChannelPlaylist.module.css";

export const ChannelPlaylists = ({ channelId }) => {
  const refCarrousel = useRef(null);
  const refFirstItem = useRef(null);
  const refLastItem = useRef(null);

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const [channelPlaylist, setChannelPlaylist] = useState([]);

  useEffect(() => {
    const refFirst = refFirstItem.current;
    let options = {
      threshold: 0.9,
    };
    let observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setShowPrev(!entry.isIntersecting);
    }, options);
    if (refFirst) {
      observer.observe(refFirst);
    }
    return () => {
      if (refFirst) {
        observer.unobserve(refFirst);
      }
    };
  }, [refFirstItem]);
  useEffect(() => {
    const refLast = refLastItem.current;
    let options = {
      threshold: 0.99,
    };
    let observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setShowNext(!entry.isIntersecting);
    }, options);
    if (refLast) {
      observer.observe(refLast);
    }
    return () => {
      if (refLast) {
        observer.unobserve(refLast);
      }
    };
  }, [refLastItem]);

  const back = () => {
    refCarrousel.current.scrollLeft -= 300;
    if (refCarrousel.current.scrollLeft < 400) {
      refCarrousel.current.scrollLeft = 0;
    }
  };
  const next = () => {
    refCarrousel.current.scrollLeft += 300;
  };

  const getChannelPlaylists = async () => {
    try {
      const { data } = await youTubeService.getChannelPlaylists(channelId);
      const channelPlaylistsIDs = data
        .filter((pl) => pl.count > 0)
        .map((playlist) => {
          return playlist.playlistId;
        });
      const { data: channelPlaylistData } = await youTubeService.getPlaylists(
        channelPlaylistsIDs
      );
      const channelPlaylistInfo = {};
      channelPlaylistData.forEach((item) => {
        channelPlaylistInfo[item.id] = item;
      });
      await Promise.all(
        Object.entries(channelPlaylistInfo).map(
          async ([playlistId, playlist]) => {
            const resp = await youTubeService.getPlayListItems(playlistId);
            const videosId = resp.items?.map(
              (video) => video.snippet.resourceId.videoId
            );
            try {
              let { data } = await youTubeService.getVideos(videosId);
              return { [playlistId]: data || [] };
            } catch (err) {}
            return { [playlistId]: [] };
          }
        )
      ).then((values) => {
        values.forEach((playlist) => {
          const [[key, value]] = Object.entries(playlist);
          if (value.length) {
            channelPlaylistInfo[key].items = value;
          }
        });
      });
      setChannelPlaylist(channelPlaylistInfo);
    } catch (err) {}
  };

  useEffect(() => {
    getChannelPlaylists();
  }, []);

  return (
    <div className={styles.channelPlaylistsContainer}>
      <strong className={styles.title}>Playlists created</strong>
      <div className={styles.carrouselContainer}>
        {showPrev && (
          <button className={styles.back} onClick={back}>
            <Icon name="ARROW_LEFT" />
          </button>
        )}
        <div
          ref={refCarrousel}
          className={styles.horizontalVideoCardsContainer}
        >
          {Object.values(channelPlaylist).map((video, index, array) => {
            if (video.playlistId && video.items) {
              return (
                <HorizontalPlaylistCard
                  dataRef={
                    index === array.length - 1
                      ? refLastItem
                      : index === 0
                      ? refFirstItem
                      : null
                  }
                  key={`index-${index}`}
                  video={video}
                />
              );
            }
          })}
        </div>
        {showNext && (
          <button className={styles.next} onClick={next}>
            <Icon name="ARROW_RIGHT" />
          </button>
        )}
      </div>
    </div>
  );
};

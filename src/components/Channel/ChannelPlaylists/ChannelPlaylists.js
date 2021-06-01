import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { youTubeService } from "../../../services/YouTubeService";
import { useLoading } from "../../../hooks/useLoading";
import HorizontalPlaylistCard from "../../HorizontalPlaylistCard/HorizontalPlaylistCard";
import Spinner from "../../Spinner/Spinner";
import Icon from "../../Icon/Icon";
import styles from "./ChannelPlaylist.module.css";

export const ChannelPlaylists = ({ channelId }) => {
  const refCarrousel = useRef(null);
  const refFirstItem = useRef(null);
  const refLastItem = useRef(null);

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const [channelPlaylist, setChannelPlaylist] = useState([]);
  const loading = useLoading();

  useLayoutEffect(() => {
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

  useLayoutEffect(() => {
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
      loading.pending();
      const { data } = await youTubeService.getChannelPlaylists(channelId);
      const channelPlaylistInfo = {};
      data
        .filter((pl) => pl.count > 0)
        .forEach((playlist) => {
          channelPlaylistInfo[playlist.playlistId] = playlist;
        });

      await Promise.all(
        Object.keys(channelPlaylistInfo).map(async (playlistId) => {
          const params = {
            maxResults: 1,
          };
          return youTubeService.getPlayListItemsFormatted(playlistId, params);
        })
      ).then((values) => {
        values.forEach(({ data }) => {
          const [playlistId, items] = data;
          channelPlaylistInfo[playlistId].items = items;
        });
      });
      setChannelPlaylist(channelPlaylistInfo);
      loading.success();
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    getChannelPlaylists();
  }, []);

  return (
    <div className={styles.channelPlaylistsContainer}>
      {loading.isPending && <Spinner />}
      {loading.isSuccess && (
        <>
          <strong className={styles.title}>Created playlists</strong>
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
              })}
            </div>
            {showNext && (
              <button className={styles.next} onClick={next}>
                <Icon name="ARROW_RIGHT" />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

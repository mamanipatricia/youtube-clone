import { useEffect, useRef, useState } from "react";
import { youTubeService } from "../../../services";
import { useLoading } from "../../../hooks/useLoading";
import HorizontalPlaylistCard from "../../HorizontalPlaylistCard/HorizontalPlaylistCard";
import Spinner from "../../Spinner/Spinner";
import styles from "./ChannelPlaylist.module.css";
import Carrousel from "../../UI/Carousel/Carousel";

export const ChannelPlaylists = ({ channelId }) => {
  const refCarrousel = useRef(null);
  const refFirstItem = useRef(null);
  const refLastItem = useRef(null);

  const [channelPlaylist, setChannelPlaylist] = useState([]);
  const loading = useLoading();

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
          <h3 className={styles.title}>Created playlists</h3>
          <Carrousel
            refCarrousel={refCarrousel}
            refFirstItem={refFirstItem}
            refLastItem={refLastItem}
          >
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
          </Carrousel>
        </>
      )}
    </div>
  );
};

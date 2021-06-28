import { useEffect, useState } from "react";
import { youTubeService } from "../../../services";
import { useLoading } from "../../../hooks/useLoading";
import VideoCard from "../../VideoCard/VideoCard";
import Spinner from "../../Spinner/Spinner";
import styles from "./ChannelVideos.module.css";

export default function ChannelVideos({ channelId, menuContent }) {
  const [videos, setVideos] = useState([]);
  const [videosID, setVideosID] = useState([]);
  let [startIndex, setStartIndex] = useState(0);

  const loading = useLoading();

  const getChannelSections = async () => {
    try {
      const { data } = await youTubeService.getChannelSections(channelId);
      const playlistsIDs = Object.keys(data);

      const videosIDResponse = [];

      await Promise.all(
        playlistsIDs.map(async (playlistID) => {
          let nextPageToken = "";
          while (typeof nextPageToken === "string") {
            let params = {};
            if (nextPageToken) {
              params = { pageToken: nextPageToken };
            }
            const resp = await youTubeService.getPlayListItems(
              playlistID,
              params
            );
            nextPageToken = resp.nextPageToken;
            resp.items?.forEach((video) => {
              videosIDResponse.push(video.snippet.resourceId.videoId);
            });
          }
        })
      )
        .then((_values) => {
          setVideosID(videosIDResponse);
        })
        .catch((err) => {
          console.log(`err`, err);
        });
    } catch (err) {
      console.log(`err`, err);
    }
  };

  const getVideos = async () => {
    if (videosID.length) {
      loading.pending();
      const { data } = await youTubeService.getVideos(
        videosID.slice(startIndex, startIndex + 50)
      );
      setVideos(data);
      setStartIndex(startIndex + 50);
    }
    loading.success();
  };

  useEffect(() => {
    getVideos();
  }, [videosID]);

  useEffect(() => {
    getChannelSections();
  }, []);

  return (
    <div>
      {loading.isPending && <Spinner />}
      <div className={styles.videosContainer}>
        {loading.isSuccess &&
          videos.map((video, index) => {
            return (
              <VideoCard
                key={`${video.videoId}-${index}`}
                hiddenContent={["avatar"]}
                video={video}
                menuContent={menuContent}
              />
            );
          })}
      </div>
    </div>
  );
}

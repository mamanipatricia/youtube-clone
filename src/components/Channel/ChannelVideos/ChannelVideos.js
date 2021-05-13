import React, { useEffect, useState } from "react";
import { useLoading } from "../../../hooks/useLoading";
import { youTubeService } from "../../../services/YouTubeService";
import Spinner from "../../Spinner/Spinner";
import VideoCards from "../../VideoCards/VideoCards";

export default function ChannelVideos({ channelId }) {
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
            let params = "";
            if (nextPageToken) {
              params = `pageToken=${nextPageToken}&`;
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
        .then((values) => {
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
      {loading.isSuccess && (
        <VideoCards hiddenContent={["avatar"]} videos={videos} />
      )}
    </div>
  );
}

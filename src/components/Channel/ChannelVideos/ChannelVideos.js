import React, { useEffect, useState } from "react";
import { youTubeService } from "../../../services/YouTubeService";
import VideoCards from "../../VideoCards/VideoCards";

export default function ChannelVideos({ channelId }) {
  const [videos, setVideos] = useState([]);
  const [videosID, setVideosID] = useState([]);
  let [startIndex, setStartIndex] = useState(0);

  const getChannelSections = async () => {
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
        console.log(`[err]`, err);
      });
  };

  const getVideos = async () => {
    if (videosID.length) {
      const { data } = await youTubeService.getVideos(
        videosID.slice(startIndex, startIndex + 50)
      );
      setVideos(data);
      setStartIndex(startIndex + 50);
    }
  };

  useEffect(() => {
    getVideos();
  }, [videosID]);

  useEffect(() => {
    getChannelSections();
  }, []);

  return (
    <div>
      <VideoCards videos={videos} />
    </div>
  );
}

import { useEffect } from "react";
import { youTubeService } from "../../../services/YouTubeService";

export const ChannelPlaylists = ({ channelId }) => {
  const getChannelSections = async () => {
    const { data } = await youTubeService.getChannelSections(channelId);
    const playlistsIDs = [];

    Object.entries(data).forEach(([playlistId, playlist]) => {
      if (playlist.section.type === "multipleplaylists") {
        playlistsIDs.push(playlistId);
      }
    });

    Promise.all(
      playlistsIDs.map(async (playlistID) => {
        const playlistItemResponse = await youTubeService.getPlayListItems(
          playlistID
        );
      })
    ).then((res) => {});
  };

  useEffect(() => {
    getChannelSections();
  }, []);

  return (
    <div>
      <span>ALL PLAYLIST</span>
    </div>
  );
};

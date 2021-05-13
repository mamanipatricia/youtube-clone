import { useEffect, useState } from "react";
import { youTubeService } from "../../../services/YouTubeService";
import ChannelSections from "../../ChannelSections/ChannelSections";

import { useLoading } from "../../../hooks/useLoading";
import Spinner from "../../Spinner/Spinner";

export default function ChannelHome({ channelId }) {
  const [channelSections, setChannelSections] = useState([]);

  const loading = useLoading();

  const getChannelSections = async () => {
    try {
      return await youTubeService.getChannelSections(channelId);
    } catch (err) {
      console.log(`err`, err);
    }
  };

  const getPlaylistData = async () => {
    const { data } = await getChannelSections();
    return data;
  };

  const getPlaylistInfo = async (playlistsIDs) => {
    const playlistInfo = {};
    try {
      const { data } = await youTubeService.getPlaylists(playlistsIDs);
      data.forEach((item) => {
        playlistInfo[item.id] = item;
      });
    } catch (err) {
      console.log(`err`, err);
    }
    return playlistInfo;
  };

  const getChannelSections1 = async () => {
    const playlistData = await getPlaylistData();
    // from prev object get the keys [id, id, id,...]
    const playlistsIDs = Object.keys(playlistData);
    // ! todo UChE3TstRbRcFu6mWYKRid8g = channel/
    const playListInfoData = await getPlaylistInfo(playlistsIDs);

    Object.entries(playlistData).forEach(([playlistId, playlist]) => {
      playlist.details = playListInfoData[playlistId];
      if (playlist.section.type === "singleplaylist") {
        playlist.section.description = playlist.details?.description;
        playlist.section.title = playlist.details?.title;
      }
    });

    await Promise.all(
      Object.entries(playlistData).map(async ([playlistId, playlist]) => {
        const resp = await youTubeService.getPlayListItems(playlistId);
        const videosId = resp.items?.map(
          (video) => video.snippet.resourceId.videoId
        );
        let { data } = await youTubeService.getVideos(videosId);
        return { [playlistId]: data };
      })
    ).then((values) => {
      values.forEach((playlist) => {
        const [[key, value]] = Object.entries(playlist); // [[id, {}]]
        playlistData[key].items = value;
      });
    });
    // GROUP BY POSITION
    const objFormatted = Object.values(playlistData).reduce((acc, cur) => {
      const { details, section } = cur;
      let items = [];
      if (section.type !== "singleplaylist") {
        items = acc[section.position]?.items || [];
        items.push({ ...details, items: cur.items });
      } else {
        items = cur.items;
      }
      acc[section.position] = {
        section: section,
        items: items,
      };
      return acc;
    }, []);
    return objFormatted;
  };

  useEffect(() => {
    (async () => {
      loading.pending();
      const channelSections = await getChannelSections1();
      setChannelSections(channelSections);
      loading.success();
    })();
  }, []);

  return (
    <>
      {loading.isPending && <Spinner />}
      {loading.isSuccess && <ChannelSections videos={channelSections} />}
    </>
  );
}

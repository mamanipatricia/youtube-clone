import { useEffect, useState } from "react";
import { youTubeService } from "../../../services";
import { useLoading } from "../../../hooks/useLoading";
import ChannelSections from "../../ChannelSections/ChannelSections";
import Spinner from "../../Spinner/Spinner";

export default function ChannelHome({ channelId, menuContent }) {
  const [channelSections, setChannelSections] = useState([]);

  const loading = useLoading();

  const getPlaylistData = async () => {
    // Initial value for channel Sections
    let resp = { data: {} };
    try {
      resp = await youTubeService.getChannelSections(channelId);
    } catch (err) {
      console.log(`err`, err);
    }
    return resp;
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

  const getChannelSections = async () => {
    let { data: playlistData } = await getPlaylistData();
    const playlistsIDs = Object.keys(playlistData);
    const playListInfoData = await getPlaylistInfo(playlistsIDs);

    Object.entries(playlistData).forEach(([playlistId, playlist]) => {
      playlist.details = playListInfoData[playlistId];
      if (playlist.section.type === "singleplaylist") {
        playlist.section.description = playlist.details?.description;
        playlist.section.title = playlist.details?.title;
        playlist.section.playlistId = playlist.details?.playlistId;
      }
    });
    // filtering "undefined details property" from playlistData
    Object.entries(playlistData)
      .filter(([, playlist]) => !playlist.details)
      .forEach((item) => delete playlistData[item[0]]);

    await Promise.all(
      Object.entries(playlistData).map(async ([playlistId, _playlist]) => {
        const resp = await youTubeService.getPlayListItems(playlistId);
        const videosId = resp.items?.map(
          (video) => video.snippet.resourceId.videoId
        );
        try {
          let { data } = await youTubeService.getVideos(videosId);
          return { [playlistId]: data || [] };
        } catch (err) {
          console.log(`err`, err);
        }
        return { [playlistId]: [] };
      })
    ).then((values) => {
      values.forEach((playlist) => {
        const [[key, value]] = Object.entries(playlist); // [[id, {}]]
        if (value.length) {
          playlistData[key].items = value;
        }
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
      const channelSections = await getChannelSections();
      setChannelSections(channelSections);
      loading.success();
    })();
  }, []);

  return (
    <>
      {loading.isPending && <Spinner />}
      {loading.isSuccess && (
        <ChannelSections videos={channelSections} menuContent={menuContent} />
      )}
    </>
  );
}

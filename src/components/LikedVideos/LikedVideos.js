import { useEffect, useState } from "react";
import { userService } from "../../services";
import { HorizontalVideoItem } from "../HorizontalVideoItem/HorizontalVideoItem";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import Icon from "../Icon/Icon";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useLoading } from "../../hooks/useLoading";
import {
  MENU_LIKED_VIDEOS,
  MENU_LIKED_VIDEO_ITEM,
} from "../Constants/Constants";
import styles from "./LikedVideos.module.css";
import Avatar from "../Avatar/Avatar";

export default function LikedVideos() {
  const [videos, setVideos] = useState([]);
  const [pageInfoLikedVideos, setPageInfoLikedVideos] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const loading = useLoading();

  const getMyLikedVideos = async () => {
    try {
      loading.pending();
      const { data: myLikedVideos, pageInfo } =
        await userService.getMyLikedVideos();
      setVideos(myLikedVideos);
      setPageInfoLikedVideos(pageInfo);
      loading.success();
    } catch (err) {
      console.log(`err`, err);
      loading.error();
    }
  };

  const getUser = async () => {
    try {
      const data = await userService.getUser();
      if (Array.isArray(data?.items)) {
        const user = {
          channelId: data?.items[0]?.id,
          channelName: data?.items[0]?.snippet.title,
          avatar: data?.items[0]?.snippet.thumbnails.medium.url,
        };
        setUserInfo(user);
      }
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    getMyLikedVideos();
    getUser();
  }, []);

  return (
    <div className={styles.playlistContainer}>
      {loading.isPending && <Spinner />}
      {loading.isSuccess && (
        <>
          <div className={`custom-scroll ${styles.playlistSidebarContainer}`}>
            <Link to={`/watch/${videos[0]?.videoId}`}>
              <div className={styles.thumbnailContainer}>
                <Thumbnail url={videos[0]?.thumbnail} />
                <div className={styles.playlistCovered}>
                  <Icon name="PLAY" color="white" />
                  PLAY ALL
                </div>
              </div>
            </Link>
            <p className={styles.title}>My liked videos</p>
            <p className={styles.count}>
              {pageInfoLikedVideos.totalResults} vídeos
            </p>
            <p>0 views</p>
            <div className={styles.iconsContainer}>
              <Icon name="SHUFFLE" color="var(--text-sentiment)" />
              <DropdownMenu
                name="MENU"
                menuContent={MENU_LIKED_VIDEOS}
                direction="horizontal"
                position="left"
              />
            </div>
            <div className={styles.channelInfo}>
              <Avatar size="medium" channel={userInfo} />
              <span>{userInfo.channelName}</span>
            </div>
          </div>
          <div className={`custom-scroll ${styles.playlistItemsContainer}`}>
            <div className={`${styles.playlistBrowserResult}`}>
              {videos.map((video, idx) => {
                return (
                  <div
                    key={video.videoId}
                    className={styles.playlistItemContainer}
                  >
                    <div className={styles.playlistItem}>
                      <div className={styles.indexPlaylistItem}>{idx + 1}</div>
                      <HorizontalVideoItem
                        video={video}
                        // playlistId={listId}
                        index={idx}
                      />
                    </div>
                    <div className={styles.moreActions}>
                      <DropdownMenu
                        name="MENU"
                        menuContent={MENU_LIKED_VIDEO_ITEM}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

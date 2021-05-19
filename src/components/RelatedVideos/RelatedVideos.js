import HorizontalVideoCard from "../HorizontalVideoCards/HorizontalVideoCard./HorizontalVideoCard";
import styles from "./RelatedVideosContainer.module.css";

const menuRelatedVideos = [
  {
    id: 1,
    label: "Add to queue",
    icon: "QUEUE",
  },
  {
    id: 2,
    label: "Save to watch later",
    icon: "CLOCK",
  },
  {
    id: 3,
    label: "Save to playlist",
    icon: "SAVE_PLAYLIST",
  },
  {
    id: 4,
    label: "Not interested",
    icon: "SAVE_PLAYLIST",
  },
  {
    id: 5,
    label: "Report",
    icon: "REPORT",
  },
];

export default function RelatedVideos({ videos }) {
  return (
    <div className={styles.relatedVideosContainer}>
      {videos.map((video) => {
        return (
          <HorizontalVideoCard
            key={`index-${video.videoId}`}
            video={video}
            direction="row"
            menuContent={menuRelatedVideos}
          />
        );
      })}
    </div>
  );
}

import { useRef } from "react";
import HorizontalPlaylistCard from "../HorizontalPlaylistCard/HorizontalPlaylistCard";
import HorizontalVideoCard from "./HorizontalVideoCard./HorizontalVideoCard";
import styles from "./HorizontalVideoCards.module.css";
import Carrousel from "../UI/Carousel/Carousel";

export default function HorizontalVideoCards({ videos, menuContent }) {
  const refCarrousel = useRef(null);
  const refFirstItem = useRef(null);
  const refLastItem = useRef(null);

  return (
    <Carrousel
      refCarrousel={refCarrousel}
      refFirstItem={refFirstItem}
      refLastItem={refLastItem}
    >
      <div ref={refCarrousel} className={styles.horizontalVideoCardsContainer}>
        {videos.items?.map((video, index, array) => {
          if (video.playlistId) {
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
          } else {
            return (
              <HorizontalVideoCard
                dataRef={
                  index === array.length - 1
                    ? refLastItem
                    : index === 0
                    ? refFirstItem
                    : null
                }
                key={`index-${index}`}
                video={video}
                menuContent={menuContent}
              />
            );
          }
        })}
      </div>
    </Carrousel>
  );
}

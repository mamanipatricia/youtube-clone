import { useEffect, useRef, useState } from "react";
import HorizontalPlaylistCard from "../HorizontalPlaylistCard/HorizontalPlaylistCard";
import HorizontalVideoCard from "./HorizontalVideoCard./HorizontalVideoCard";
import Icon from "../Icon/Icon";
import styles from "./HorizontalVideoCards.module.css";

export default function HorizontalVideoCards({ videos, menuContent }) {
  const refCarrousel = useRef(null);
  const refFirstItem = useRef(null);
  const refLastItem = useRef(null);

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const refFirst = refFirstItem.current;
    let options = {
      threshold: 0.9,
    };
    let observer = new IntersectionObserver((entries) => {
      console.log(`[entries]`, entries);
      const [entry] = entries;
      setShowPrev(!entry.isIntersecting);
    }, options);
    if (refFirst) {
      observer.observe(refFirst);
    }
    return () => {
      if (refFirst) {
        observer.unobserve(refFirst);
      }
    };
  }, [refFirstItem]);

  useEffect(() => {
    const refLast = refLastItem.current;
    let options = {
      threshold: 0.99,
    };
    let observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setShowNext(!entry.isIntersecting);
    }, options);
    if (refLast) {
      observer.observe(refLast);
    }
    return () => {
      if (refLast) {
        observer.unobserve(refLast);
      }
    };
  }, [refLastItem]);

  const back = () => {
    refCarrousel.current.scrollLeft -= 300;
    if (refCarrousel.current.scrollLeft < 400) {
      refCarrousel.current.scrollLeft = 0;
    }
  };
  const next = () => {
    refCarrousel.current.scrollLeft += 300;
  };

  return (
    <div className={styles.carrouselContainer}>
      {showPrev && (
        <button className={styles.back} onClick={back}>
          <Icon name="ARROW_LEFT" />
        </button>
      )}
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
      {showNext && (
        <button className={styles.next} onClick={next}>
          <Icon name="ARROW_RIGHT" />
        </button>
      )}
    </div>
  );
}

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../UI/Arrows/Arrows";
import Carousel from "../UI/Carousel/Carousel";
import styles from "./FeedFilterBarRenderer.module.css";

const feedFilterItems = [
  { id: 1, label: "All" },
  { id: 2, label: "Live" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "Angular" },
  { id: 5, label: "Training" },
  { id: 6, label: "Music" },
  { id: 7, label: "Chill out music" },
  { id: 8, label: "Comedy" },
  { id: 9, label: "cryptocurrencies" },
  { id: 10, label: "Electronic Music" },
  { id: 11, label: "Recently uploaded" },
  { id: 12, label: "React" },
  { id: 13, label: "Laravel" },
  { id: 14, label: "Cars" },
  { id: 15, label: "Vue.js" },
  { id: 16, label: "Node" },
  { id: 17, label: "Docker" },
  { id: 18, label: "CSS" },
  { id: 19, label: "Food" },
  { id: 20, label: "Beverages" },
  { id: 21, label: "Beer" },
];

export default function FeedFilterBarRenderer({ onChangeFeed }) {
  const [feed, setFeed] = useState(null);

  const refCarousel = useRef(null);
  const refFirstItem = useRef(null);
  const refLastItem = useRef(null);

  const feedDisplayHandle = (newFeed) => {
    setFeed(newFeed);
    onChangeFeed(newFeed);
  };

  return (
    <div className={styles.feedFilterContainer}>
      <Carousel
        refCarousel={refCarousel}
        refFirstItem={refFirstItem}
        refLastItem={refLastItem}
        prevBtn={<ArrowLeft />}
        nextBtn={<ArrowRight />}
      >
        <div ref={refCarousel} className={styles.horizontalVideoCardsContainer}>
          {feedFilterItems.map((feedItem, index, array) => {
            return (
              <div
                ref={
                  index === array.length - 1
                    ? refLastItem
                    : index === 0
                    ? refFirstItem
                    : null
                }
                key={`key-${feedItem.id}`}
                className={`${styles.feedFilter} ${
                  feedItem.label === feed ? styles.active : ""
                }`}
                onClick={() => feedDisplayHandle(feedItem.label)}
              >
                {feedItem.label}
              </div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
}

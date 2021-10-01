import { useEffect, useState } from "react";
import Icon from "../../Icon/Icon";
import styles from "./Carousel.module.css";

export default function Carousel({
  children,
  refCarousel,
  refFirstItem,
  refLastItem,
  prevBtn = null,
  nextBtn = null,
}) {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const refFirst = refFirstItem.current;
    let options = {
      root: refCarousel.current,
      threshold: 0.9,
    };
    let observer = new IntersectionObserver((entries) => {
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
      root: refCarousel.current,
      // rootMargin: "100px",
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
    refCarousel.current.scrollLeft -= 300;
    if (refCarousel.current.scrollLeft < 400) {
      refCarousel.current.scrollLeft = 0;
    }
  };
  const next = () => {
    refCarousel.current.scrollLeft += 300;
  };

  // Default previous arrow
  let prevButton = (
    <button className={styles.back}>
      <Icon name="ARROW_LEFT" />
    </button>
  );
  if (prevBtn) {
    prevButton = prevBtn;
  }
  // Default Next arrow
  let nextButton = (
    <button className={styles.next}>
      <Icon name="ARROW_RIGHT" />
    </button>
  );
  if (nextBtn) {
    nextButton = nextBtn;
  }

  return (
    <div className={styles.carouselContainer}>
      {showPrev && (
        <div className={styles.prevContainer} onClick={back}>
          {prevButton}
        </div>
      )}
      {children}
      {showNext && (
        <div className={styles.nextContainer} onClick={next}>
          {nextButton}
        </div>
      )}
    </div>
  );
}

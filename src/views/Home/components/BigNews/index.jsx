import { BIG_NEWS } from "@/constants/fakeBigNews";
import React from "react";
import styled from "styled-components";
import HotNewItem from "../HotNews/HotNewItem";

const BigNewsContainer = styled.div`
  width: 100%;
  height: 570px;
  margin-bottom: 60px;
  overflow: hidden;
  .news-content {
    width: fit-content;
    display: flex;
    gap: 4px;
    overflow-x: visible;
    .news-item {
      width: calc(25vw - 3px);
      height: 570px;
      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        inset: 35px 30px 35px 40px;
      }
    }
  }
`;

function BigNews() {
  // const itemWidth = 477;
  // const totalLength = BIG_NEWS?.length;
  // const carouselRef = useRef(null);
  // const [currentIndex, setCurrentIndex] = useState(1);
  // const [transitioning, setTransitioning] = useState(false);
  // const cloneList = [BIG_NEWS[BIG_NEWS.length - 1], ...BIG_NEWS, BIG_NEWS[0]];
  // const cloneLength = cloneList?.length;

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTransitioning(true);
  //     setCurrentIndex((prevCount) => prevCount + 1);
  //   }, 2000);
  //   return () => clearInterval(intervalId);
  // }, [totalLength]);

  // useEffect(() => {
  //   if (transitioning) {
  //     const transitionEnd = () => {
  //       if (currentIndex === 0) {
  //         setCurrentIndex(totalLength);
  //         carouselRef.current.style.transition = "none";
  //       } else if (currentIndex === cloneLength - 6) {
  //         setCurrentIndex(1);
  //         carouselRef.current.style.transition = "none";
  //       } else {
  //         carouselRef.current.style.transition = "transform 0.5s ease-in-out";
  //       }
  //       setTransitioning(false);
  //       carouselRef.current.removeEventListener("transitionend", transitionEnd);
  //     };

  //     carouselRef.current.addEventListener("transitionend", transitionEnd);
  //     carouselRef.current.style.transition = "transform 0.5s ease-in-out";
  //   }
  // }, [currentIndex, transitioning, totalLength, cloneLength]);

  // useEffect(() => {
  //   carouselRef.current.style.transform = `translateX(-${
  //     currentIndex * itemWidth
  //   }px)`;
  // }, [currentIndex, itemWidth]);

  return (
    <BigNewsContainer>
      <div
        // ref={carouselRef}
        className="news-content"
      >
        {BIG_NEWS?.map((item, index) => (
          <div
            key={`new_${item?.title}_${index}`}
            className="news-item"
          >
            <HotNewItem item={item} />
          </div>
        ))}
      </div>
    </BigNewsContainer>
  );
}

export default BigNews;

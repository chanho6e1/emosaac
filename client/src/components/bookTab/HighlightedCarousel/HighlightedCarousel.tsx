/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useState, useEffect, useRef, useMemo } from "react";
import BookCard from "@/components/UI/BookCard/BookCard";
import Swipe from "react-easy-swipe";
import { useIsResponsive } from "@/components/Responsive/useIsResponsive";
import { bookContentType } from "@/types/books";
import { throttle } from "lodash";

interface HighlightedCarousel {
  bookData: bookContentType[];
  windowWrapperRef: any;
  identifier: string;
}

const Waterfall = ({
  bookData,
  windowWrapperRef,
  identifier,
}: HighlightedCarousel) => {
  const [bookDataList, setBookDataList] = useState<bookContentType[]>([
    ...bookData,
  ]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const dummyNormalRef = useRef<HTMLInputElement>(null);
  // const wrapperRef = useRef<any>([]);
  const carouselWrapperRef = useRef<HTMLInputElement>(null);

  const dummyHighlightedRef = useRef<HTMLInputElement>(null);
  const [isDeskTop, isTablet, isMobile] = useIsResponsive();
  const [showCount, setShowCount] = useState<number>(9);
  const [loading, setLoading] = useState<boolean>(true)

  const cardLayout = {
    widthValue: 13,
    heightValue: 19,
    highlightedWidthValue: 17,
    highlightedHeightValue: 25,
    spaceValue: 5,
    unit: "vw",

    // min 관련 값들의 단위는 px
    minWidthValue: 150,
    minHeightValue: 225,
    minHighlightedWidthValue: 210,
    minHighlightedHeightValue: 280,
    minSpaceValue: 24,
  };

  useEffect(() => {
    if (
      bookDataList[0].title !==
      bookDataList[bookDataList.length - showCount].title
    ) {
      const temp = bookDataList.concat(bookDataList.slice(0, showCount));
      setBookDataList(() => temp);
    }

    // console.log(bookDataList);
    // console.log(temp);
  }, []);

  // const handleResize = () => {
  //   if (carouselWrapperRef.current !== null) {
  //     const calcLeft =
  //     carouselWrapperRef.current.clientWidth > windowWrapperRef?.current?.offsetWidth
  //       ? -(
  //           carouselWrapperRef.current.clientWidth - windowWrapperRef?.current?.offsetWidth
  //         ) / 2 + "px" : "0px";
  //     carouselWrapperRef.current.style.left = calcLeft
  //   }
  // }

  const [windowWidth, setWindowWidth] = useState<any>(0);

  const handleResize = useMemo(
    () =>
      throttle((event) => {
        if (
          carouselWrapperRef.current !== null &&
          dummyNormalRef.current !== null
        ) {
          const calcWidth =
            dummyNormalRef.current.clientWidth < cardLayout.minWidthValue
              ? (cardLayout.minWidthValue + cardLayout.minSpaceValue) *
                  (showCount - 1) +
                cardLayout.minHighlightedWidthValue +
                "px"
              : (cardLayout.widthValue + cardLayout.spaceValue) *
                  (showCount - 1) +
                cardLayout.highlightedWidthValue +
                cardLayout.unit;

          carouselWrapperRef.current.style.width = calcWidth;

          const calcLeft =
            carouselWrapperRef.current.clientWidth >
            windowWrapperRef?.current?.offsetWidth
              ? -(
                  carouselWrapperRef.current.clientWidth -
                  windowWrapperRef?.current?.offsetWidth
                ) /
                  2 +
                "px"
              : "0px";
          carouselWrapperRef.current.style.left = calcLeft;
        }
        setWindowWidth(() => window.innerWidth);
        
      }, 1000),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  const prevBtnHandler = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    } else {
      setCurrentIdx(() => bookDataList.length - showCount - 1);
    }
  };

  const nextBtnHandler = () => {
    if (currentIdx < bookDataList.length - showCount - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setCurrentIdx(() => 0);
    }
  };

  const renderBooks = bookDataList
    .slice(currentIdx, currentIdx + showCount)
    .map((el, idx) => {
      return (
        <div
          // ref={(ele) => (wrapperRef.current[idx] = ele)}
          key={`${el.title}-${windowWidth}-${identifier}`}
          css={imgWrapperCSS({
            
            idx,
            widthValue: cardLayout.widthValue,
            heightValue: cardLayout.heightValue,
            unit: cardLayout.unit,
            highlightedWidthValue: cardLayout.highlightedWidthValue,
            highlightedHeightValue: cardLayout.highlightedHeightValue,
            spaceValue: cardLayout.spaceValue,
            normalRef: dummyNormalRef,
            minWidthValue: cardLayout.minWidthValue,
            minHeightValue: cardLayout.minHeightValue,
            minHighlightedWidthValue: cardLayout.minHighlightedWidthValue,
            minHighlightedHeightValue: cardLayout.minHighlightedHeightValue,
            minSpaceValue: cardLayout.minSpaceValue,
            showCount: showCount,
          })}
        >
          {/* <img src={el.img} css={imgCSS} /> */}

          <BookCard
            hideType={true}
            bookData={el}
            showPlatform={true}
            // width={`${wrapperRef?.current[idx]?.clientWidth}px`}
            // height={`${wrapperRef?.current[idx]?.clientHeight}px`}
          />
          {/* <img src={el.img} css={imgCSS({idx, widthValue: cardLayout.widthValue, heightValue: cardLayout.heightValue, unit: cardLayout.unit, highlightedWidthValue: cardLayout.highlightedWidthValue, highlightedHeightValue: cardLayout.highlightedHeightValue, spaceValue: cardLayout.spaceValue, normalRef: dummyNormalRef, highlightedRef: dummyHighlightedRef, minWidthValue: cardLayout.minWidthValue, minHeightValue: cardLayout.minHeightValue, minHighlightedWidthValue: cardLayout.minHighlightedWidthValue, minHighlightedHeightValue: cardLayout.minHighlightedHeightValue, minSpaceValue: cardLayout.minSpaceValue })} /> */}
        </div>
      );
    });

  const [positionx, setPositionx] = useState<number>(0);

  const onSwipeMove = (position = { x: 0 }) => {
    setPositionx(() => position.x);
  };

  const onSwipeEnd = () => {
    // console.log(positionx);
    if (positionx > 40) {
      prevBtnHandler();
    }
    if (positionx < -40) {
      nextBtnHandler();
    }
    setPositionx(() => 0);
  };

  const indicatorBtn = (
    <>
      <div css={prevBtnCSS} onClick={prevBtnHandler}>
        〈
      </div>
      <div css={nextBtnCSS} onClick={nextBtnHandler}>
        〉
      </div>
    </>
  );
  return (
    // <div css={carouselOuterWrapperCSS({highlightedHeightValue: cardLayout.highlightedHeightValue, unit: cardLayout.unit, minHighlightedHeightValue: cardLayout.minHighlightedHeightValue, highlightedRef: dummyHighlightedRef})}></div>

    <div className={"carousel-outer-wrapper"} css={carouselOuterWrapperCSS({loading})} >
      <img css={css`display: none;`} src={"/assets/emosaac_logo.png"} onLoad={() => {setLoading(() => false)}}/>
      <div
        css={highlightedDecoratorCSS({
          highlightedHeightValue: cardLayout.highlightedHeightValue,
          minHighlightedHeightValue: cardLayout.minHighlightedHeightValue,
          unit: cardLayout.unit,
          highlightedRef: dummyHighlightedRef,
          carouselWrapperRef: carouselWrapperRef,
        })}
      />
      <Swipe
        onSwipeStart={(event: any) => {
          event.stopPropagation();
        }}
        // onSwipeEnd={onSwipeEnd}
        onSwipeMove={onSwipeMove}
        onSwipeEnd={onSwipeEnd}
      >
        <div>
          {/* <button onClick={prevBtnHandler}>prev</button>
          <button
            onClick={() => {
              console.log(bookDataList);
            }}
          >
            show
          </button>
          <button onClick={nextBtnHandler}>next</button> */}

          {isMobile === false && indicatorBtn}

          <div
            ref={carouselWrapperRef}
            className={"carousel-inner-wrapper"}
            css={carouselInnerWrapperCSS({
              widthValue: cardLayout.widthValue,
              unit: cardLayout.unit,
              highlightedWidthValue: cardLayout.highlightedWidthValue,
              minWidthValue: cardLayout.minWidthValue,
              minHighlightedWidthValue: cardLayout.minHighlightedWidthValue,
              spaceValue: cardLayout.spaceValue,
              minSpaceValue: cardLayout.minSpaceValue,
              normalRef: dummyNormalRef,
              carouselWrapperRef: carouselWrapperRef,
              windowWrapperRef: windowWrapperRef,
              showCount: showCount,
            })}
          >
            {renderBooks}
          </div>

          <div css={dummyWrapper}>
            <div
              className={"dummy-normal"}
              ref={dummyNormalRef}
              css={dummyNormalCSS({
                widthValue: cardLayout.widthValue,
                heightValue: cardLayout.heightValue,
                unit: cardLayout.unit,
              })}
            />
            <div
              className={"dummy-highlighted"}
              ref={dummyHighlightedRef}
              css={dummyHighlightedCSS({
                highlightedWidthValue: cardLayout.highlightedWidthValue,
                highlightedHeightValue: cardLayout.highlightedHeightValue,
                unit: cardLayout.unit,
              })}
            />
            <div
              className={"dummy-min-highlighted"}
              css={dummyMinHighlightedCSS({
                minHighlightedHeightValue: cardLayout.minHighlightedHeightValue,
              })}
            />
          </div>
        </div>
      </Swipe>
    </div>
  );
};

export default Waterfall;

// interface carouselOuterWrapperCSSProps {
//     highlightedHeightValue: number;
//     unit: string;
//     minHighlightedHeightValue: number;
//     highlightedRef: any;
// }

// const carouselOuterWrapperCSS = ({highlightedHeightValue, unit, minHighlightedHeightValue, highlightedRef}: carouselOuterWrapperCSSProps) => {
//     const calcHeight = highlightedRef?.current?.clientHeight < minHighlightedHeightValue ? minHighlightedHeightValue + 'px' : highlightedHeightValue + unit
//     return css`
//         width: 100%;
//         height: ${calcHeight};
//         margin: 0 auto;
//         display:flex;
//         justify-content: center;
//     `
// }

const carouselOuterWrapperCSS = ({loading}: {loading: boolean}) => {
  return css`
    width: 100%;
    margin: 0 auto;
    /* display:flex;
          justify-content: center; */
    display: grid;
    place-items: center;
    position: relative;

    transition-property: opacity;
    transition-duration: 0.3s;
    opacity: ${loading === false ? '100%' : '0%'};
  `;
}

interface imgWrapperCSSProps {
  idx: number;
  widthValue: number;
  heightValue: number;
  unit: string;
  highlightedWidthValue: number;
  highlightedHeightValue: number;
  spaceValue: number;
  normalRef: any;

  minWidthValue: number;
  minHeightValue: number;
  minHighlightedWidthValue: number;
  minHighlightedHeightValue: number;
  minSpaceValue: number;
  showCount: number;
}

const imgWrapperCSS = ({
  idx,
  widthValue,
  heightValue,
  unit,
  highlightedWidthValue,
  highlightedHeightValue,
  spaceValue,
  normalRef,
  minWidthValue,
  minHeightValue,
  minHighlightedWidthValue,
  minHighlightedHeightValue,
  minSpaceValue,
  showCount,
}: imgWrapperCSSProps) => {
  const calcWidth =
    normalRef?.current?.clientWidth < minWidthValue
      ? (idx === Math.floor(showCount / 2)
          ? minHighlightedWidthValue
          : minWidthValue) + "px"
      : (idx === Math.floor(showCount / 2)
          ? highlightedWidthValue
          : widthValue) + unit;
  const calcHeight =
    normalRef?.current?.clientHeight < minHeightValue
      ? (idx === Math.floor(showCount / 2)
          ? minHighlightedHeightValue
          : minHeightValue) + "px"
      : (idx === Math.floor(showCount / 2)
          ? highlightedHeightValue
          : heightValue) + unit;
  const calcLeft =
    normalRef?.current?.clientWidth < minWidthValue
      ? (idx > Math.floor(showCount / 2)
          ? idx * (minWidthValue + minSpaceValue) +
            (minHighlightedWidthValue - minWidthValue)
          : idx * (minWidthValue + minSpaceValue)) + "px"
      : (idx > Math.floor(showCount / 2)
          ? idx * (widthValue + spaceValue) +
            (highlightedWidthValue - widthValue)
          : idx * (widthValue + spaceValue)) + unit;
  const calcTop =
    normalRef?.current?.clientWidth < minWidthValue
      ? (idx !== Math.floor(showCount / 2)
          ? (minHighlightedHeightValue - minHeightValue) / 2
          : 0) + "px"
      : (idx !== Math.floor(showCount / 2)
          ? (highlightedHeightValue - heightValue) / 2
          : 0) + unit;
  return css`
    transition-property: left top width height;
    transition-duration: 0.3s;
    position: absolute;
    left: ${calcLeft};
    top: ${calcTop};
    /* left: ${(idx > 2
      ? idx * (widthValue + spaceValue) + (highlightedWidthValue - widthValue)
      : idx * (widthValue + spaceValue)) + unit}; */
    /* top: ${(idx === 2 ? -(highlightedHeightValue - heightValue) / 2 : 0) +
    unit}; */
    width: ${calcWidth};
    height: ${calcHeight};
    visibility: ${idx < showCount ? "visible" : "hidden"};
    overflow: hidden;
  `;
};

// const imgWrapperCSS = ({idx, widthValue, heightValue, unit, highlightedWidthValue, highlightedHeightValue, spaceValue}: imgCSSProps) => {
//     return css`
//         transition-property: left top width height;
//         transition-duration: 0.3s;
//         position: absolute;
//         left: ${(idx > 2 ? (idx * (widthValue + spaceValue) + (highlightedWidthValue - widthValue)) : idx * (widthValue + spaceValue)) + unit};
//         top: ${(idx === 2 ? -(highlightedHeightValue - heightValue) / 2 : 0) + unit};
//         width: ${(idx === 2 ? highlightedWidthValue : widthValue) + unit};
//         height: ${(idx === 2 ? highlightedHeightValue : heightValue) + unit};
//         visibility: ${idx < 5 ? 'visible' : 'hidden'};
//         overflow: hidden;

//     `
// }

// interface imgCSSProps {
//     idx: number;
//     widthValue: number;
//     heightValue: number;
//     unit: string;
//     highlightedWidthValue: number;
//     highlightedHeightValue: number;
//     spaceValue: number;
//     normalRef: any;
//     highlightedRef: any;

//     minWidthValue: number;
//     minHeightValue: number;
//     minHighlightedWidthValue: number;
//     minHighlightedHeightValue: number;
//     minSpaceValue: number;

// }

// const imgCSS = ({idx, widthValue, unit, highlightedWidthValue, spaceValue}: imgCSSProps) => {
//     return css`
//         /* width: ${(idx === 2 ? highlightedWidthValue : widthValue) + unit};
//         height: auto; */
//         width: 100%;
//         height: auto;
//     `
// }

const imgCSS = css`
  width: 100%;
  height: auto;
`;

interface carouselInnerWrapperCSSProps {
  widthValue: number;
  unit: string;
  highlightedWidthValue: number;
  minWidthValue: number;
  minHighlightedWidthValue: number;
  spaceValue: number;
  minSpaceValue: number;
  normalRef: any;
  carouselWrapperRef: any;
  windowWrapperRef: any;
  showCount: number;
}

const carouselInnerWrapperCSS = ({
  widthValue,
  unit,
  highlightedWidthValue,
  spaceValue,
  minSpaceValue,
  minWidthValue,
  minHighlightedWidthValue,
  normalRef,
  carouselWrapperRef,
  windowWrapperRef,
  showCount,
}: carouselInnerWrapperCSSProps) => {
  const calcWidth =
    normalRef?.current?.clientWidth < minWidthValue
      ? (minWidthValue + minSpaceValue) * (showCount - 1) +
        minHighlightedWidthValue +
        "px"
      : (widthValue + spaceValue) * (showCount - 1) +
        highlightedWidthValue +
        unit;

  const calcLeft =
    carouselWrapperRef?.current?.clientWidth >
    windowWrapperRef?.current?.offsetWidth
      ? -(
          carouselWrapperRef?.current?.clientWidth -
          windowWrapperRef?.current?.offsetWidth
        ) /
          2 +
        "px"
      : "0px";

  return css`
    width: ${calcWidth};
    left: ${calcLeft};
    position: relative;
    display: flex;
  `;
};

interface dummyNormalCSSProps {
  widthValue: number;
  heightValue: number;
  unit: string;
}

const dummyNormalCSS = ({
  widthValue,
  heightValue,
  unit,
}: dummyNormalCSSProps) => {
  return css`
    width: ${widthValue + unit};
    height: ${heightValue + unit};
    pointer-events: none;
    /* display: none; */
  `;
};

interface dummyHighlightedCSSProps {
  highlightedWidthValue: number;
  highlightedHeightValue: number;
  unit: string;
}

const dummyHighlightedCSS = ({
  highlightedWidthValue,
  highlightedHeightValue,
  unit,
}: dummyHighlightedCSSProps) => {
  return css`
    width: ${highlightedWidthValue + unit};
    height: ${highlightedHeightValue + unit};
    pointer-events: none;
    /* display: none; */
  `;
};

const prevBtnCSS = css`
  z-index: 9;
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 48px;
  font-weight: 700;
  padding-left: 8px;
  padding-right: 8px;
  color: var(--text-color);
  transition-property: font-size;
  transition-duration: 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    font-size: 54px;
  }
`;

const nextBtnCSS = css`
  z-index: 9;
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 48px;
  font-weight: 700;
  padding-left: 8px;
  padding-right: 8px;
  color: var(--text-color);
  transition-property: font-size;
  transition-duration: 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover {
    font-size: 54px;
  }
`;

interface highlightedDecoratorCSS {
  unit: string;
  highlightedHeightValue: number;
  minHighlightedHeightValue: number;
  highlightedRef: any;
  carouselWrapperRef: any;
}

const highlightedDecoratorCSS = ({
  highlightedHeightValue,
  minHighlightedHeightValue,
  unit,
  highlightedRef,
}: highlightedDecoratorCSS) => {
  const calcHeight =
    highlightedRef?.current?.clientHeight < minHighlightedHeightValue
      ? minHighlightedHeightValue + 48 + "px"
      : highlightedHeightValue + 5 + unit;

  return css`
    width: ${calcHeight};
    height: ${calcHeight};
    background-color: var(--border-color-2);
    border-radius: 10000px;
    position: absolute;
  `;
};

interface dummyMinHighlightedCSSProps {
  minHighlightedHeightValue: number;
}
const dummyMinHighlightedCSS = ({
  minHighlightedHeightValue,
}: dummyMinHighlightedCSSProps) => {
  return css`
    width: 1px;
    height: ${minHighlightedHeightValue}px;
    pointer-events: none;
  `;
};

const dummyWrapper = css`
  display: flex;
  justify-content: center;
`;

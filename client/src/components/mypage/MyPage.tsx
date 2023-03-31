/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import MiddleWideButton from "../UI/Button/MiddleWideButton";
import { useState } from "react";
import Chart from "./Chart";
import { useRouter } from "next/router";
import { useEffect } from "react";
import getMyStatic from "./../../api/mypage/getMyStatic";
import { useIsResponsive } from "@/components/Responsive/useIsResponsive";
import getRecommendGenre from "./../../api/mypage/ReommendTopGenre";
import { getToken } from "@/api/instance";

const MyPage = ({ myinfo }: any) => {
  const router = useRouter();
  const token = getToken();
  const [isDeskTop, isTablet, isMobile] = useIsResponsive();
  const [bookId, setBookId] = useState<number | null>(null);
  function onClickMoveEditPage() {
    router.push("/mypage/edit");
  }
  const [typeCode, setTypeCode] = useState<number>(0);
  const onClickWebToon = () => {
    setTypeCode(0);
  };
  const onClickWebNovel = () => {
    setTypeCode(1);
  };
  const onClickMoveDetail = () => {
    router.push(`books/${bookId}`);
  };
  const [topGenreWebtoonImage, setTopGenreWebtoonImage] = useState<string>("");
  const [worstGenreWebtoonImage, setWorstGenreWebtoonImage] =
    useState<string>("");
  const [topGenreNovelImage, setTopGenreNovelImage] = useState<string>("");
  const [worstGenreNovelImage, setWrostGenreNovelImage] = useState<string>("");
  useEffect(() => {
    if (typeCode === 0) {
      getRecommendGenre(0, typeCode, token).then((res) => {
        const data = res;
        // console.log(data);
        if (data !== null) {
          setTopGenreWebtoonImage(data.thumbnail);
          setBookId(data.bookId);
        }
      });
      getRecommendGenre(1, typeCode, token).then((res) => {
        const data = res;
        if (data !== null) {
          setWorstGenreWebtoonImage(data.thumbnail);
          setBookId(data.bookId);
        }
      });
    } else if (typeCode === 1) {
      getRecommendGenre(0, typeCode, token).then((res) => {
        const data = res;
        if (data !== null) {
          setTopGenreNovelImage(data.thumbnail);
          setBookId(data.bookId);
        }
      });
      getRecommendGenre(1, typeCode, token).then((res) => {
        const data = res;
        if (data !== null) {
          setWrostGenreNovelImage(data.thumbnail);
          setBookId(data.bookId);
        }
      });
    }
  }, [typeCode]);
  return (
    <>
      <section css={userinfoCSS(isDeskTop, isTablet, isMobile)}>
        <div css={profileimagewrapperCSS(isDeskTop, isTablet, isMobile)}>
          <img
            src={myinfo.imageUrl}
            alt="프로필 이미지"
            css={profileimageCSS}
          />
        </div>
        <div css={infowrapCSS}>
          <h2 css={nicknameCSS}>{myinfo.nickname}</h2>
          <div css={buttonCSS}>
            <MiddleWideButton
              text={"회원 정보 수정"}
              onClick={onClickMoveEditPage}
            />
          </div>
        </div>
      </section>
      <section css={routewrapCSS}>
        <article onClick={onClickWebToon}>웹툰</article>
        <article onClick={onClickWebNovel}>웹소설</article>
      </section>

      <section css={chartwrapperCSS(isDeskTop, isTablet, isMobile)}>
        <article css={chartCSS(isDeskTop, isTablet, isMobile)}>
          <Chart typeCode={typeCode} />
        </article>
        <article css={recommendCSS(isDeskTop, isTablet, isMobile)}>
          <div css={recommendborderCSS(isDeskTop, isTablet, isMobile)}>
            <h3 css={recommendexplainCSS}>가장 많이 본 장르의</h3>
            <h3 css={recommendexplainCSS}>
              {typeCode === 0 ? "웹툰" : "웹소설"}을 추천해줄게요
            </h3>
            <div css={contentCSS}>
              <div css={imagewrapperCSS}>
                {typeCode === 0 ? (
                  <img
                    css={imageCSS}
                    src={topGenreWebtoonImage}
                    alt="많이 본 웹툰 썸네일"
                    onClick={onClickMoveDetail}
                  />
                ) : (
                  <img
                    css={imageCSS}
                    src={topGenreNovelImage}
                    alt="많이 본 웹소설 썸네일"
                    onClick={onClickMoveDetail}
                  />
                )}
              </div>
            </div>
          </div>
          <div css={recommendborderCSS(isDeskTop, isTablet, isMobile)}>
            <h3 css={recommendexplainCSS}>가장 적게 본 장르의 </h3>
            <h3 css={recommendexplainCSS}>
              {typeCode === 0 ? "웹툰" : "웹소설"}을 추천해줄게요
            </h3>

            <div css={contentCSS}>
              <div css={imagewrapperCSS}>
                {typeCode === 0 ? (
                  <img
                    css={imageCSS}
                    src={worstGenreWebtoonImage}
                    alt="적게 본 웹툰 썸네일"
                    onClick={onClickMoveDetail}
                  />
                ) : (
                  <img
                    css={imageCSS}
                    src={worstGenreNovelImage}
                    alt="적게 본 웹소설 썸네일"
                    onClick={onClickMoveDetail}
                  />
                )}
              </div>
            </div>
          </div>
        </article>
      </section>
      <section>
        <h3>북마크 한 목록</h3>
      </section>
    </>
  );
};
const userinfoCSS = (
  isDeskTop: boolean,
  isTablet: boolean,
  isMobile: boolean
) => css`
  display: flex;
  align-items: ${isDeskTop ? "center" : isTablet ? "center" : "center"};
  margin-left: ${isDeskTop ? "105px" : isTablet ? "50px" : "20px"};
  width: 100%;
  height: ${isDeskTop ? "200px" : isTablet ? "200px" : "150px"};
  /* align-items: center; */
`;
const profileimagewrapperCSS = (
  isDeskTop: boolean,
  isTablet: boolean,
  isMobile: boolean
) => css`
  border-radius: 100%;
  width: ${isDeskTop ? "150px" : isTablet ? "120px" : "100px"};
  height: ${isDeskTop ? "150px" : isTablet ? "120px" : "100px"};

  overflow: hidden;
  margin-right: 40px;
`;

const profileimageCSS = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const infowrapCSS = css`
  display: grid;
`;

const nicknameCSS = css`
  margin-bottom: 10px;
`;

const buttonCSS = css`
  margin-top: 20px;
`;

const routewrapCSS = css`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  padding: 5px;
  border-top: 0.5px solid var(--main-color);
  & > article {
    cursor: pointer;
  }
`;
// 라우터 아래 최상위
const chartwrapperCSS = (
  isDeskTop: boolean,
  isTablet: boolean,
  isMobile: boolean
) => css`
  display: ${isDeskTop ? "grid" : isTablet ? "flex" : "flex"};
  flex-direction: column;
  grid-template-columns: 1fr 1.5fr;
  column-gap: 50px;
  width: 100%;
  height: 100%;
`;

const chartCSS = (
  isDeskTop: boolean,
  isTablet: boolean,
  isMobile: boolean
) => css`
  height: 500px;
  width: ${isDeskTop ? "400px" : "100%"};
  margin-top: ${isDeskTop ? "100px" : isTablet ? "50px" : "50px"};
  margin-left: ${isDeskTop ? "60px" : "null"};
  left: 0px;
`;

// 추천 최상위
const recommendCSS = (
  isDeskTop: boolean,
  isTablet: boolean,
  isMobile: boolean
) => css`
  margin-top: 45px;
  width: 100%;
  height: 100%;
  display: ${isDeskTop ? "grid" : isTablet ? "flex" : "flex"};
  align-content: start;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  & > div {
    /* margin-right: 200px; */
    /* line-height: 200px; */
  }
`;

const recommendborderCSS = (
  isDeskTop: boolean,
  isTablet: boolean,
  isMobile: boolean
) => css`
  /* border: 1px solid white; */
  border-radius: 5px;
  padding: 10px;
  /* background-color: #fff; */
  width: 210px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const recommendexplainCSS = css`
  font-weight: bold;
  /* width: 100%; */
  margin-top: 5px;
`;

const contentCSS = css`
  display: flex;
  /* width: 300px; */
  height: auto;
`;

const imagewrapperCSS = css`
  width: 100%;
  height: 250px;
  margin-top: 20px;
  overflow: hidden;
  /* min-width: 150px; */
`;
const imageCSS = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
  cursor: pointer;
`;
export default MyPage;

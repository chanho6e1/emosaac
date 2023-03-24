/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { SearchBarDropDown } from "./SearchBarDropDown";
import { FiSearch } from "react-icons/fi";
import { getListByContent, getListByTagName } from "../../../api/search";
import { useIsResponsive } from "@/components/Responsive/useIsResponsive";

interface Props {
  setIsSearchBoxOpen: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = (props: Props) => {
  const router = useRouter();
  const [isDeskTop, isTablet, isMobile] = useIsResponsive();
  const typeDict: { [key: string]: string } = {
    ["전체"]: "total",
    ["웹툰"]: "webtoon",
    ["웹소설"]: "novel",
  };
  const [searchInput, setSearchInput] = useState("");
  const [selectedCate, setSelectedCate] = useState("전체");
  const [type, setType] = useState("total");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isTagName, setIsTagName] = useState(false);
  useEffect(() => {
    setType(typeDict[selectedCate]);
  }, [selectedCate]);
  useEffect(() => {
    if (searchInput.slice(0, 1) === "#") {
      setIsTagName(true);
    } else {
      setIsTagName(false);
    }
  }, [searchInput]);
  useEffect(() => {
    if (isMobile) {
      setType("total");
    }
  }, [isMobile]);
  function onChangeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    const inputText = event.target.value;
    setSearchInput(inputText);
    props.setIsSearchBoxOpen(true);
  }
  function onEnterKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (searchInput === "") {
        alert("검색어를 입력해주세요");
      } else {
        props.setIsSearchBoxOpen(false);
        const [prevId, prevScore, size] = [20493, 10, 10];
        if (isTagName) {
          const tagName = searchInput.slice(1);
          router.push({
            pathname: `/search/tagname`,
            query: {
              type,
              query: tagName,
            },
          });
          setSearchInput("");
        } else {
          const content = searchInput;
          router.push({
            pathname: `/search/content`,
            query: {
              type,
              query: content,
            },
          });
          setSearchInput("");
        }
      }
    }
  }
  return (
    <div css={searchBarWrapCSS({ isDeskTop, isTablet, isMobile })}>
      <div css={searchIconCSS}>
        <FiSearch />
      </div>
      <input
        type="text"
        placeholder="제목, 작가를 입력하세요."
        css={inputWrapCSS}
        value={searchInput}
        onChange={onChangeSearchInput}
        onKeyDown={onEnterKeyDown}
      />
      {!isMobile && (
        <>
          <div>in</div>
          <SearchBarDropDown
            selectedCate={selectedCate}
            setSelectedCate={setSelectedCate}
            isDropDownOpen={isDropDownOpen}
            setIsDropDownOpen={setIsDropDownOpen}
            setIsSearchBoxOpen={props.setIsSearchBoxOpen}
          />
        </>
      )}
    </div>
  );
};

interface IsResponsive {
  isDeskTop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const searchBarWrapCSS = ({ isDeskTop, isTablet, isMobile }: IsResponsive) => {
  return css`
    display: grid;
    ${!isMobile && "grid-template-columns: 20px 1fr 20px 100px;"}
    ${isMobile && "grid-template-columns: 20px 1fr;"}
    column-gap: 20px;
    height: 45px;
    background-color: var(--back-color-2);
    border-radius: 5px;
    font-weight: bold;
    & > input {
      color: var(--text-color);
    }
    & > * {
      margin: auto 0;
    }
  `;
};

const searchIconCSS = css`
  & > * {
    margin-left: 14px;
  }
`;

const inputWrapCSS = css`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--back-color-2);
  ::placeholder {
    font-weight: bold;
  }
`;
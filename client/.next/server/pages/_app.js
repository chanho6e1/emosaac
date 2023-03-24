(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/SearchBarDropDown.tsx
/** @jsxImportSource @emotion/react */ 



const SearchBarDropDown = (props)=>{
    const [selectArr, setSelectArr] = (0,external_react_.useState)([
        "전체",
        "웹툰",
        "웹소설"
    ]);
    // const [selectedCate, setSelectedCate] = useState("전체");
    // const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    function onClickDropDown() {
        props.setIsDropDownOpen(!props.isDropDownOpen);
        props.setIsSearchBoxOpen(true);
    }
    function onClickSelected(selected) {
        props.setSelectedCate(selected);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        css: dropDownWrapCSS,
        onClick: onClickDropDown,
        children: [
            props.selectedCate,
            /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineChevronDown, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                css: dropDownBoxCSS(props.isDropDownOpen),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        css: selectedCSS,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: props.selectedCate
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineChevronDown, {})
                        ]
                    }),
                    selectArr.map((selected, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>onClickSelected(selected),
                            children: selected
                        }, idx))
                ]
            })
        ]
    });
};
const dropDownWrapCSS = react_.css`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  height: 100%;
  font-size: 14px;
`;
const dropDownBoxCSS = (isDropDownOpen)=>{
    return react_.css`
    /* ${isDropDownOpen ? "display : block;" : "display : none;"} */
    ${isDropDownOpen ? "visibility: visible;" : "visibility: hidden;"}
    ${isDropDownOpen ? "opacity : 1;" : "opacity: 0;"}
    transition: all 0.3s;
    position: absolute;
    top: 0;
    left: -10px;
    width: 110px;
    height: 138px;
    padding: 0 10px 20px;
    background-color: var(--back-color-3);
    color: var(--text-color);
    font-size: 14px;
    border-radius: 5px;
    font-weight: normal;
    & > div:nth-of-type(n + 2) {
      height: 30px;
      & :hover {
        filter: var(--hover-color);
      }
    }
  `;
};
const selectedCSS = react_.css`
  height: 45px;
  line-height: 48px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: ./src/components/Responsive/useIsResponsive.ts
var useIsResponsive = __webpack_require__(4932);
;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/SearchBar.tsx
/** @jsxImportSource @emotion/react */ 






const SearchBar = (props)=>{
    const router = (0,router_.useRouter)();
    const [isDeskTop, isTablet, isMobile] = (0,useIsResponsive/* useIsResponsive */.j)();
    const typeDict = {
        ["전체"]: "total",
        ["웹툰"]: "webtoon",
        ["웹소설"]: "novel"
    };
    const [searchInput, setSearchInput] = (0,external_react_.useState)("");
    const [selectedCate, setSelectedCate] = (0,external_react_.useState)("전체");
    const [type, setType] = (0,external_react_.useState)("total");
    const [isDropDownOpen, setIsDropDownOpen] = (0,external_react_.useState)(false);
    const [isTagName, setIsTagName] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setType(typeDict[selectedCate]);
    }, [
        selectedCate
    ]);
    (0,external_react_.useEffect)(()=>{
        if (searchInput.slice(0, 1) === "#") {
            setIsTagName(true);
        } else {
            setIsTagName(false);
        }
    }, [
        searchInput
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isMobile) {
            setType("total");
        }
    }, [
        isMobile
    ]);
    function onChangeSearchInput(event) {
        const inputText = event.target.value;
        setSearchInput(inputText);
        props.setIsSearchBoxOpen(true);
    }
    function onEnterKeyDown(event) {
        if (event.key === "Enter") {
            if (searchInput === "") {
                alert("검색어를 입력해주세요");
            } else {
                props.setIsSearchBoxOpen(false);
                const [prevId, prevScore, size] = [
                    20493,
                    10,
                    10
                ];
                if (isTagName) {
                    const tagName = searchInput.slice(1);
                    router.push({
                        pathname: `/search/tagname`,
                        query: {
                            type,
                            query: tagName
                        }
                    });
                    setSearchInput("");
                } else {
                    const content = searchInput;
                    router.push({
                        pathname: `/search/content`,
                        query: {
                            type,
                            query: content
                        }
                    });
                    setSearchInput("");
                }
            }
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        css: searchBarWrapCSS({
            isDeskTop,
            isTablet,
            isMobile
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                css: searchIconCSS,
                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiSearch, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "제목, 작가를 입력하세요.",
                css: inputWrapCSS,
                value: searchInput,
                onChange: onChangeSearchInput,
                onKeyDown: onEnterKeyDown
            }),
            !isMobile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "in"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchBarDropDown, {
                        selectedCate: selectedCate,
                        setSelectedCate: setSelectedCate,
                        isDropDownOpen: isDropDownOpen,
                        setIsDropDownOpen: setIsDropDownOpen,
                        setIsSearchBoxOpen: props.setIsSearchBoxOpen
                    })
                ]
            })
        ]
    });
};
const searchBarWrapCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
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
const searchIconCSS = react_.css`
  & > * {
    margin-left: 14px;
  }
`;
const inputWrapCSS = react_.css`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--back-color-2);
  ::placeholder {
    font-weight: bold;
  }
`;

;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/SearchBarMobile.tsx
/** @jsxImportSource @emotion/react */ 




const SearchBarMobile = (props)=>{
    const router = (0,router_.useRouter)();
    const typeDict = {
        ["전체"]: "total",
        ["웹툰"]: "webtoon",
        ["웹소설"]: "novel"
    };
    const type = "total";
    const [searchInput, setSearchInput] = (0,external_react_.useState)("");
    const [isTagName, setIsTagName] = (0,external_react_.useState)(false);
    function onChangeSearchInput(event) {
        const inputText = event.target.value;
        setSearchInput(inputText);
    }
    function onEnterKeyDown(event) {
        if (event.key === "Enter") {
            if (searchInput === "") {
                alert("검색어를 입력해주세요");
            } else {
                const [prevId, prevScore, size] = [
                    20493,
                    10,
                    10
                ];
                props.setIsSearchBoxOpen(false);
                if (isTagName) {
                    const tagName = searchInput.slice(1);
                    router.push({
                        pathname: `/search/tagname`,
                        query: {
                            type,
                            query: tagName
                        }
                    });
                    setSearchInput("");
                } else {
                    const content = searchInput;
                    router.push({
                        pathname: `/search/content`,
                        query: {
                            type,
                            query: content
                        }
                    });
                    setSearchInput("");
                }
            }
        }
    }
    function onClickSearch() {
        if (searchInput === "") {
        // props.setIsSearchBoxOpen(false);
        } else {
            const [prevId, prevScore, size] = [
                20493,
                10,
                10
            ];
            props.setIsSearchBoxOpen(false);
            console.log("여기옴?");
            console.log("여기옴?");
            if (isTagName) {
                const tagName = searchInput.slice(1);
                router.push({
                    pathname: `/search/tagname`,
                    query: {
                        type,
                        query: tagName
                    }
                });
                setSearchInput("");
            } else {
                const content = searchInput;
                router.push({
                    pathname: `/search/content`,
                    query: {
                        type,
                        query: content
                    }
                });
                setSearchInput("");
            }
        }
    }
    (0,external_react_.useEffect)(()=>{
        if (searchInput.slice(0, 1) === "#") {
            setIsTagName(true);
        } else {
            setIsTagName(false);
        }
    }, [
        searchInput
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props.isSearchClicked) {
            onClickSearch();
        }
    }, [
        props.isSearchClicked
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        css: SearchBarMobile_searchBarWrapCSS,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                css: SearchBarMobile_searchIconCSS,
                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiSearch, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "제목, 작가를 입력하세요.",
                css: SearchBarMobile_inputWrapCSS,
                value: searchInput,
                onChange: onChangeSearchInput,
                onKeyDown: onEnterKeyDown
            })
        ]
    });
};
const SearchBarMobile_searchBarWrapCSS = react_.css`
  display: grid;
  grid-template-columns: 20px 1fr;
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
const SearchBarMobile_searchIconCSS = react_.css`
  & > * {
    margin-left: 14px;
  }
`;
const SearchBarMobile_inputWrapCSS = react_.css`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--back-color-2);
  ::placeholder {
    font-weight: bold;
  }
`;

;// CONCATENATED MODULE: ./src/api/DummyData.json
;// CONCATENATED MODULE: ./src/api/DummyData.ts

const data = DummyData_namespaceObject;
const recvBooks = async (startIdx, recvRange)=>{
    const promise = await new Promise((resolve)=>{
        resolve(data.slice(startIdx, recvRange));
    });
    return promise;
};

;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/SearchBookCard.tsx
/** @jsxImportSource @emotion/react */ 



const SearchBookCard = ({ bookData , showPlatform , width , height , minWidth , minHeight  })=>{
    const router = (0,router_.useRouter)();
    const [user, setUser] = (0,external_react_.useState)(null);
    // let user: any = null;
    (0,external_react_.useEffect)(()=>{
        setUser(()=>navigator.userAgent);
    }, []);
    const wrapperRef = (0,external_react_.useRef)(null);
    const [modalToggler, setModalToggler] = (0,external_react_.useState)(false);
    const [isMouseOn, setIsMouseOn] = (0,external_react_.useState)(false);
    const platformBar = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        css: platformBarCSS
    });
    const instantlyRedirect = ()=>{
        router.replace("/books/2");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bookcard-outer-wrapper",
        css: cardOuterWrapper({
            width,
            height,
            minWidth,
            minHeight
        }),
        ref: wrapperRef,
        onClick: instantlyRedirect,
        onMouseOver: (event)=>{
            event.stopPropagation();
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bookcard-inner-wrapper",
            css: cardInnerWrapperCSS({
                width,
                height,
                minWidth,
                minHeight
            }),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    css: skeletonLoadingTagCSS({
                        state: bookData !== "LOADING" ? true : false
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "img",
                    src: bookData && bookData.img,
                    alt: bookData && bookData.title,
                    css: imageCSS
                }),
                showPlatform && bookData !== "LOADING" && platformBar
            ]
        })
    });
};
const cardOuterWrapper = ({ width , height , minWidth , minHeight  })=>{
    return react_.css`
    cursor: pointer;
    position: relative;
    width: ${width !== undefined ? width : "auto"};
    height: ${height !== undefined ? height : "100%"};
    ${minWidth && `min-width: ${minWidth}`};
    ${minHeight && `min-height: ${minHeight}`};
    box-shadow: var(--shadow-color);
    overflow: hidden;
    border-radius: 10px;
  `;
};
const cardInnerWrapperCSS = ({ width , height , minWidth , minHeight  })=>{
    return react_.css`
    position: relative;
    /* width: ${width !== undefined ? width : "auto"}; */
    width: 100%;
    /* height: ${height !== undefined ? height : "100%"}; */
    height: 100%;
    ${minWidth && `min-width: ${minWidth}`};
    ${minHeight && `min-height: ${minHeight}`};
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};
const platformBarCSS = react_.css`
  width: 100%;
  height: 3vw;
  min-height: 36px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  pointer-events: none;
`;
const imageCSS = react_.css`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
  }
`;
const skeletonLoadingTagCSS = ({ state  })=>{
    return react_.css`
    position: absolute;
    width: 100%;
    height: 100%;
    transition-property: opacity;
    transition-duration: 0.3s;
    border-radius: 10px;
    background-color: rgb(200, 200, 200);
    position: absolute;
    opacity: ${state ? "0" : "255"};
    pointer-events: none;
  `;
};
/* harmony default export */ const NavigationBar_SearchBookCard = (SearchBookCard);

// EXTERNAL MODULE: ./src/components/UI/Button/ToggleButton.tsx
var ToggleButton = __webpack_require__(1017);
;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/SearchBox.tsx
/** @jsxImportSource @emotion/react */ 






const SearchBox = (props)=>{
    const [bookData, setBookData] = (0,external_react_.useState)([]);
    const [isDeskTop, isTablet, isMobile] = (0,useIsResponsive/* useIsResponsive */.j)();
    const [tagList, setTagList] = (0,external_react_.useState)([
        "먼치킨",
        "복수",
        "환생",
        "회귀",
        "로판"
    ]);
    function onClickBack() {
        props.setIsSearchBoxOpen(false);
    }
    (0,external_react_.useEffect)(()=>{
        recvBooks(0, 4).then((res)=>setBookData(()=>res));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        css: searchWrapCSS,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                css: searchBoxCSS({
                    isDeskTop,
                    isTablet,
                    isMobile
                }),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    css: searchContentWrapCSS({
                        isDeskTop,
                        isTablet,
                        isMobile
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            css: recentHistoryCSS({
                                isDeskTop,
                                isTablet,
                                isMobile
                            }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "최근 조회한 컨텐츠"
                                }),
                                bookData && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    css: booksWrapCSS({
                                        isDeskTop,
                                        isTablet,
                                        isMobile
                                    }),
                                    children: bookData.map((book, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            css: bookWrapCSS,
                                            onClick: onClickBack,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "웹소설"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar_SearchBookCard, {
                                                    bookData: book,
                                                    showPlatform: false,
                                                    width: "100%"
                                                }, idx),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    css: titleCSS({
                                                        isDeskTop,
                                                        isTablet,
                                                        isMobile
                                                    }),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: "상수리 나무 아래"
                                                    })
                                                })
                                            ]
                                        }))
                                }),
                                !bookData && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "조회한 컨텐츠가 없습니다."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            css: tagSearchCSS({
                                isDeskTop,
                                isTablet,
                                isMobile
                            }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "태그로 검색하기"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: tagList.map((tag, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(ToggleButton/* default */.Z, {
                                            text: "#" + tag,
                                            isClicked: false
                                        }, idx))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                css: boxBackCSS({
                    isDeskTop,
                    isTablet,
                    isMobile
                }),
                onClick: onClickBack
            })
        ]
    });
};
const visibleCSS = (transY)=>{
    return react_.keyframes`
    0% {
      opacity: 0; 
      transform:translateY(${transY});}
    100% {
      opacity : 100; 
      transform:translateY(0);}
  `;
};
const searchWrapCSS = react_.css`
  position: relative;
  z-index: 18;
`;
const searchBoxCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    position: absolute;
    width: 100%;
    ${isDeskTop && "padding: 20px 105px 10px;"}
    ${isTablet && "padding: 20px 50px 10px;"}
    ${isMobile && "padding: 20px 20px 30px;"}
    border-radius: 0 0 10px 10px;
    background-color: var(--back-color-2);
    box-shadow: var(--shadow-color);
    animation: ${visibleCSS("-200px")} 0.3s;
  `;
};
const boxBackCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    ${isDeskTop && "height: calc(100vh - 70px);"}
    ${isTablet && "height: calc(100vh - 110.8px);"}
    ${isMobile && "height: calc(100vh - 115px);"}
    background-color: #17171b55;
  `;
};
const searchContentWrapCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    ${!isMobile && "display: grid; grid-template-columns: 3fr 1fr; column-gap: 30px;"}
    ${isMobile && "display: block;"}
  `;
};
const recentHistoryCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    ${!isMobile && "border-right: 1px solid var(--border-color); padding-right:30px;"}
    margin-bottom: 30px;
    & > h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    & > div {
      max-width: 700px;
    }
  `;
};
const booksWrapCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${!isMobile && "column-gap: 20px;"}
    ${isMobile && "column-gap: 10px;"}
  `;
};
const bookWrapCSS = react_.css`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 40px;
  line-height: 40px;
  & > span {
    position: absolute;
    z-index: 10;
    top: 0;
    display: block;
    width: 40px;
    text-align: center;
    font-weight: bold;
    height: 25px;
    line-height: 25px;
    border-radius: 5px 0px 5px 0px;
    background-color: var(--main-color);
    margin-right: 6px;
    font-size: 12px;
  }
`;
const titleCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    display: flex;
    line-height: 40px;
    align-items: center;
    ${isDeskTop ? "font-size: 14px;" : "font-size: 14px;"}
    & > span {
      display: block;
      width: 34px;
      text-align: center;
      font-weight: bold;
      ${isDeskTop ? "font-size: 10px;" : "font-size: 10px;"}
      height: 20px;
      line-height: 20px;
      border-radius: 5px;
      background-color: var(--main-color);
      margin-right: 6px;
    }
    & > div {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;
};
const tagSearchCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    & > h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    & button {
      margin-right: 6px;
      margin-bottom: 6px;
    }
  `;
};
/* harmony default export */ const NavigationBar_SearchBox = (SearchBox);

;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/DarkModeToggle.tsx
/** @jsxImportSource @emotion/react */ 


const DarkModeToggle = (props)=>{
    // const [isDarkMode, setIsDarkMode] = useState(false);
    (0,external_react_.useEffect)(()=>{
        const darkMode = localStorage.getItem("data-theme");
        if (darkMode === "dark") {
            props.setIsDarkMode(true);
        } else {
            props.setIsDarkMode(false);
        }
        document.documentElement.setAttribute("data-theme", darkMode === "dark" ? "dark" : "light");
    }, []);
    function onChangeDarkMode() {
        const darkMode = localStorage.getItem("data-theme");
        if (darkMode === "dark") {
            // dark > light모드로 바꾸기
            props.setIsDarkMode(false);
        } else {
            // light > dark모드로 바꾸기
            props.setIsDarkMode(true);
        }
        document.documentElement.setAttribute("data-theme", darkMode === "dark" ? "light" : "dark");
        localStorage.setItem("data-theme", darkMode === "dark" ? "light" : "dark");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        id: "dark-mode-toggle",
        css: darkModeToggleCSS,
        onClick: onChangeDarkMode,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                css: circleCSS(props.isDarkMode)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: "darkmode-icon",
                src: "/assets/darkmode_dark.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: "lightmode-icon",
                src: "/assets/darkmode_light.png"
            })
        ]
    });
};
const darkModeToggleCSS = react_.css`
  position: relative;
  cursor: pointer;
  margin: auto 0;
  height: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  background-color: var(--back-color-2);
  & > img {
    width: 20px;
    height: 20px;
    /* filter: brightness(100) grayscale(100%); */
  }
`;
const circleCSS = (isDarkMode)=>{
    return react_.css`
    position: absolute;
    top: 4px;
    left: 5px;
    transform: ${isDarkMode ? "translateX(29px)" : "translateX(0)"};
    width: 22px;
    height: 22px;
    border-radius: 20px;
    background-color: var(--text-color-4);
    transition: all 0.3s;
  `;
};

;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/BasicButton.tsx
/** @jsxImportSource @emotion/react */ 




const BasicButton = ()=>{
    const router = (0,router_.useRouter)();
    const [isLogin, setIsLogin] = (0,external_react_.useState)(false);
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const token = localStorage.getItem("access_token");
    function onClickLogin() {
        router.push({
            pathname: `/login`
        });
    }
    function onClickLogout() {
        localStorage.clear();
        router.push({
            pathname: "/"
        });
    }
    (0,external_react_.useEffect)(()=>{
        if (token) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [
        token
    ]);
    const handleMouseEnter = ()=>{
        setIsOpen(true);
    };
    const handleMouseLeave = ()=>{
        setIsOpen(false);
    };
    const onClickMoveMypage = ()=>{
        router.push("/mypage");
    };
    // 비 로그인시 로그인, 로그인 이면 프로필 사진 보이게. 호버하면 마이페이지랑 로그아웃 버튼
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isLogin ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            css: topCSS,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    css: profileimgCSS,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/bazzi.jpg",
                        alt: "프로필 사진",
                        css: imgCSS,
                        onClick: onClickMoveMypage
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    css: hoverwrapCSS(isOpen),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            css: ButtonWrapCSS,
                            children: "마이페이지"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            css: ButtonWrapCSS,
                            onClick: onClickLogout,
                            children: "로그아웃"
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
            id: "basic-button",
            css: ButtonWrapCSS,
            onClick: onClickLogin,
            children: "로그인"
        })
    });
};
const topCSS = react_.css`
  position: relative;
`;
const profileimgCSS = react_.css`
  border-radius: 100%;
  background-color: var(--back-color-4);
  width: 60%;
  height: 60%;
`;
const imgCSS = react_.css`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;
const hoverwrapCSS = (isOpen)=>react_.css`
  display: ${isOpen ? "flex" : "none"};
  position: absolute;
`;
const ButtonWrapCSS = react_.css`
  cursor: pointer;
  height: 36px;
  border: 1px solid var(--border-color-2);
  border-radius: 5px;
  background-color: var(--back-color);
  color: var(--text-color-2);
`;

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/UI/NavigationBar/NavigationBar.tsx
/** @jsxImportSource @emotion/react */ 



// import Image from "next/image";
// import emosaac_logo from "@/assets/emosaac_logo.png";
// import emosaac_logo_white from "@/assets/emosaac_logo_white.png";
// import emosaac_logo_mobile from "@/assets/emosaac_logo_mobile.png";
// import { ReactComponent as Logo } from "@/assets/emosaac_logo.svg";












const NavigationBar = ()=>{
    const router = (0,router_.useRouter)();
    // DeskTop Nav content의 최소 너비
    const isNavLimit = !(0,external_react_responsive_.useMediaQuery)({
        query: "(min-width: 1185px) or (max-width: 1023px)"
    });
    const [isDeskTop, isTablet, isMobile] = (0,useIsResponsive/* useIsResponsive */.j)();
    const [isDarkMode, setIsDarkMode] = (0,external_react_.useState)(false);
    const [isSearchBoxOpen, setIsSearchBoxOpen] = (0,external_react_.useState)(false);
    const [isSearchClicked, setIsSearchClicked] = (0,external_react_.useState)(false);
    const [currentRoute, setCurrentRoute] = (0,external_react_.useState)({
        home: false,
        webtoon: false,
        novel: false,
        emopick: false,
        mypage: false
    });
    function onClickSearchBar() {
        if (!isMobile) {
            setIsSearchBoxOpen(true);
        }
    }
    function onClickSearchIcon() {
        setIsSearchBoxOpen(!isSearchBoxOpen);
    }
    function onClickSearchMobile() {
        setIsSearchClicked(true);
    }
    (0,external_react_.useEffect)(()=>{
        if (!isSearchBoxOpen) {
            setIsSearchClicked(true);
        }
    }, [
        isSearchBoxOpen
    ]);
    (0,external_react_.useEffect)(()=>{
        const pathName = router.pathname.split("/")[1];
        switch(pathName){
            case "":
                setCurrentRoute({
                    home: true,
                    webtoon: false,
                    novel: false,
                    emopick: false,
                    mypage: false
                });
                break;
            case "books":
                setCurrentRoute({
                    home: false,
                    webtoon: true,
                    novel: true,
                    emopick: false,
                    mypage: false
                });
                break;
            case "mypage":
                setCurrentRoute({
                    home: false,
                    webtoon: false,
                    novel: false,
                    emopick: false,
                    mypage: true
                });
                break;
            case "emopick":
                setCurrentRoute({
                    home: false,
                    webtoon: false,
                    novel: false,
                    emopick: true,
                    mypage: false
                });
                break;
        }
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                css: navTopCSS,
                children: [
                    isSearchBoxOpen && isMobile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        css: searchBarMobileCSS,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiArrowLeftSLine, {
                                size: 30,
                                onClick: onClickSearchIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SearchBarMobile, {
                                isSearchClicked: isSearchClicked,
                                setIsSearchBoxOpen: setIsSearchBoxOpen
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiSearch, {
                                size: 24,
                                onClick: onClickSearchMobile
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        css: navBackCSS(isTablet),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            css: navWrapCSS({
                                isSearchBoxOpen,
                                isNavLimit,
                                isDeskTop,
                                isTablet,
                                isMobile
                            }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: {
                                        pathname: "/"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        css: logoWrapCSS,
                                        onClick: ()=>{
                                            setIsSearchBoxOpen(false);
                                        },
                                        children: [
                                            isMobile && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                alt: "logo",
                                                src: "/assets/emosaac_logo_mobile.png"
                                            }),
                                            !isMobile && isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                alt: "logo",
                                                src: "/assets/emosaac_logo_white.png"
                                            }),
                                            !isMobile && !isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                alt: "logo",
                                                src: "/assets/emosaac_logo.png"
                                            })
                                        ]
                                    })
                                }),
                                isDeskTop && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    css: menuWrapCSS(isDeskTop, isTablet),
                                    onClick: ()=>{
                                        setIsSearchBoxOpen(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/books",
                                            replace: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                css: routerCSS(currentRoute.webtoon),
                                                children: "웹툰"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/books",
                                            replace: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                css: routerCSS(currentRoute.webtoon),
                                                children: "웹소설"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/emopick",
                                            replace: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                css: routerCSS(currentRoute.emopick),
                                                children: "EMOPICK"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: onClickSearchBar,
                                    children: !isMobile && /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {
                                        setIsSearchBoxOpen: setIsSearchBoxOpen
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(DarkModeToggle, {
                                    isDeskTop: isDeskTop,
                                    isTablet: isTablet,
                                    isMobile: isMobile,
                                    isDarkMode: isDarkMode,
                                    setIsDarkMode: setIsDarkMode
                                }),
                                isDeskTop ? /*#__PURE__*/ jsx_runtime_.jsx(BasicButton, {}) : isTablet ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: {
                                        pathname: "/login"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdPerson, {
                                        size: 24,
                                        css: react_.css`
                    color: var(--text-color);
                  `,
                                        onClick: ()=>{
                                            setIsSearchBoxOpen(false);
                                        }
                                    })
                                }) : null,
                                isMobile && /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiSearch, {
                                    size: 24,
                                    css: react_.css`
                  cursor: pointer;
                `,
                                    onClick: onClickSearchIcon
                                })
                            ]
                        })
                    }),
                    isTablet && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        css: menuWrapCSS(isDeskTop, isTablet),
                        onClick: ()=>{
                            setIsSearchBoxOpen(false);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                replace: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    css: routerCSS(currentRoute.home),
                                    children: "홈"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/books",
                                replace: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    css: routerCSS(currentRoute.webtoon),
                                    children: "웹툰"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/books",
                                replace: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    css: routerCSS(currentRoute.webtoon),
                                    children: "웹소설"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/emopick",
                                replace: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    css: routerCSS(currentRoute.emopick),
                                    children: "EMOPICK"
                                })
                            })
                        ]
                    }),
                    isSearchBoxOpen && /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar_SearchBox, {
                        setIsSearchBoxOpen: setIsSearchBoxOpen
                    })
                ]
            }),
            isMobile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                css: dockBarCSS,
                onClick: ()=>{
                    setIsSearchBoxOpen(false);
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            replace: true,
                            children: [
                                currentRoute.home ? /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiFillHome, {
                                    size: 24
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineHome, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "홈"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/books",
                            replace: true,
                            children: [
                                currentRoute.webtoon ? /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdCookie, {
                                    size: 24
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlineCookie, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "웹툰"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/books",
                            replace: true,
                            children: [
                                currentRoute.novel ? /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiBookReadFill, {
                                    size: 24
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiBookReadLine, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "웹소설"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/emopick",
                            replace: true,
                            children: [
                                currentRoute.emopick ? /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiPlayCircleFill, {
                                    size: 24
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiPlayCircleLine, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "이모픽"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            children: [
                                currentRoute.mypage ? /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdPerson, {
                                    size: 24
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlinePersonOutline, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "MY"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
const NavigationBar_visibleCSS = (transY)=>{
    return react_.keyframes`
  0% {
    opacity: 0; 
    transform:translateY(${transY});}
  100% {
    opacity : 100; 
    transform:translateY(0);}
`;
};
const routerCSS = (isCurrentRoute)=>{
    return react_.css`
    ${isCurrentRoute ? "color: var(--main-color)" : null}
  `;
};
const navTopCSS = react_.css`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
`;
const searchBarMobileCSS = react_.css`
  position: absolute;
  top: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: 30px 1fr 20px;
  column-gap: 20px;
  width: 100%;
  height: 60px;
  padding-right: 20px;
  background-color: var(--back-color);
  animation: ${NavigationBar_visibleCSS("0")} 0.3s;
  & > * {
    margin: auto 0;
  }
  & > svg:first-of-type {
    transform: translateX(8px);
  }
`;
const navBackCSS = (isTablet)=>{
    return react_.css`
    position: relative;
    z-index: 25;
    ${!isTablet && "border-bottom: 1px solid var(--border-color-2);"}
    background-color: var(--back-color);
    /* box-shadow: var(--shadow-color); */
  `;
};
const navWrapCSS = ({ isSearchBoxOpen , isNavLimit , isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    position: relative;
    display: none;
    grid-template-columns: none;
    ${(isDeskTop || isTablet || isMobile) && "display : grid;"}
    ${isDeskTop ? "grid-template-columns: 130px 180px 1fr 60px 80px;" : isTablet ? "grid-template-columns: 130px 1fr 60px 24px;" : isMobile ? "grid-template-columns: 40px 1fr 60px 20px;" : "grid-template-columns: none;"}
    ${!isMobile && "column-gap: 24px;"}
    ${isMobile && "column-gap: 20px;"}
    margin: ${isDeskTop ? isNavLimit ? "0 auto" : "0 105px" : isTablet ? "0 50px" : "0 20px"};
    /* height: ${isDeskTop ? "70px" : "60px"}; */
    height: 70px;
    ${isMobile && "height: 60px;"}
    width: ${isDeskTop ? isNavLimit ? "914px" : "auto" : "auto"};
    color: var(--text-color);
    & > * {
      margin: auto 0;
    }
  `;
};
const logoWrapCSS = react_.css`
  cursor: pointer;
  display: flex;
  align-items: center;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: red !important;
    & g {
      fill: red !important;
    }
  }
`;
const menuWrapCSS = (isDeskTop, isTablet)=>{
    return react_.css`
    position: relative;
    z-index: 20;
    display: flex;
    font-size: 14px;
    font-weight: bold;
    padding: ${isDeskTop ? "0" : isTablet ? "0 50px" : "0 20px"};
    justify-content: ${isDeskTop ? "space-between" : "flex-start"};
    ${isDeskTop ? null : "background-color: var(--back-color);"}
    ${isTablet && "border-bottom: 1px solid var(--border-color-2);"}
    & > a {
      line-height: ${isDeskTop ? "50px" : "40px"};
      ${isDeskTop ? null : "padding: 0 10px;"}
    }
  `;
};
const dockBarCSS = react_.css`
  position: fixed;
  z-index: 20;
  display: grid;
  background-color: var(--back-color-op);
  box-shadow: var(--shadow-color);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  & > li {
    height: 100%;
    & > a {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > div {
        padding-top: 6px;
        font-size: 12px;
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx
/** @jsxImportSource @emotion/react */ 



const Layout = (props)=>{
    const [isDeskTop, isTablet, isMobile] = (0,useIsResponsive/* useIsResponsive */.j)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        css: backCSS({
            isDeskTop,
            isTablet,
            isMobile
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar, {}),
            props.children
        ]
    });
};
const backCSS = ({ isDeskTop , isTablet , isMobile  })=>{
    return react_.css`
    background-color: var(--back-color);
    color: var(--text-color);
    ${isDeskTop && "padding-top: 70px;"}
    ${isTablet && "padding-top: 110px;"}
    ${isMobile && "padding: 60px 0 75px;"}
  `;
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 7046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export darkMode */
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const mainStore = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.createStore)();
const darkMode = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainStore);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var _jotai_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7046);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4917);
/* harmony import */ var _components_Responsive_useIsClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5797);
/* harmony import */ var _components_Responsive_useIsResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__, _jotai_atom__WEBPACK_IMPORTED_MODULE_3__]);
([jotai__WEBPACK_IMPORTED_MODULE_2__, _jotai_atom__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// import { useMediaQuery } from "react-responsive";
function App({ Component , pageProps  }) {
    const [isDeskTop, isTablet, isMobile] = (0,_components_Responsive_useIsResponsive__WEBPACK_IMPORTED_MODULE_6__/* .useIsResponsive */ .j)();
    const isClient = (0,_components_Responsive_useIsClient__WEBPACK_IMPORTED_MODULE_5__/* .useIsClient */ .O)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jotai__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: _jotai_atom__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "https://developers.kakao.com/sdk/js/kakao.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2451:
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,932,17], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();
import * as React from "react";
import styles from "./style";
import { useSprings, useSpring } from "react-spring";
import Yam from "./../../../data/works/Yam.jpg";
import Uena from "./../../../data/works/Uena.jpg";
import Takuro from "./../../../data/works/Takuro.jpg";
import Shinogu from "./../../../data/works/Shinogu.jpg";
import Oto from "./../../../data/works/Oto.jpg";
import Oga from "./../../../data/works/Oga.jpg";
import Kana from "./../../../data/works/Kana.jpg";
import Heejun from "./../../../data/works/Heejun.jpg";
import Hazuki from "./../../../data/works/Hazuki.jpg";
import Fumin from "./../../../data/works/Fu-min.jpg";

const {
  WrapperDiv,
  AnimatedListDiv,
  AnimatedCoverDiv,
  AnimatedStyledButtonDiv,
  AnimatedBoxListsDiv,
  AnimatedBoxDiv,
  StyledButton,
  StyledImg,
} = styles;

interface FileInputProps {}

// 上限と下限内にする
const clamp = (x: number, min: number, max: number) => {
  if (x < min) return min;
  else if (x > max) return max;
  else return x;
};

// 実際の要素数
const ELEM_NUM = 10;
const ELEM_LIST_DUMMY = Array(ELEM_NUM).fill(0);
// 表示するインデックス先頭と最後
const DISP_IDX_START = 1;
const DISP_IDX_END = 5;

//対象要素の高さ
const BOX_HEIGHT = 100;
const BOX_MARGIN = 20;

const LIST_IMG_OBJ = [
  { img: Yam, cont: "先生の言葉" },
  { img: Uena, cont: "Uena" },
  { img: Takuro, cont: "Takuro" },
  { img: Shinogu, cont: "Shinogu" },
  { img: Oto, cont: "Oto" },
  { img: Oga, cont: "Oga" },
  { img: Kana, cont: "Kana" },
  { img: Heejun, cont: "Heejun" },
  { img: Hazuki, cont: "Hazuki" },
  { img: Fumin, cont: "Fumin" },
];

export const SpikeExhibitionTry4: React.FC<FileInputProps> = ({}) => {
  const [mouseOverIndex, setMouseOverIndex] = React.useState(0);
  const [mouseClickIndex, setMouseClickIndex] = React.useState(0);
  const [flagClick, setFlagClick] = React.useState(false);
  const [flagMouseEnter, setFlagMouseEnter] = React.useState(false);
  const [flagResize, setFlagResize] = React.useState(false);
  const [order, setOrder] = React.useState(
    ELEM_LIST_DUMMY.map((_, index) => index)
  );
  const [coverCont, setCoverCont] = React.useState("");

  const refStyledListDiv = React.useRef<HTMLDivElement>(
    document.createElement("div")
  );
  const refStyledButtonDiv = React.useRef<HTMLDivElement>(
    document.createElement("div")
  );
  const spring = useSpring({
    opacity: flagClick ? 1 : 0,
    zIndex: flagClick ? 5 : -1,
    delay: flagClick ? 1000 : 0,
    immediate: (n) => n === "zIndex",
  });

  //スタイルを作る関数
  const makeStyle = (idx: number) => {
    const curIdx = order.indexOf(idx);
    const y =
      (clamp(curIdx, DISP_IDX_START, DISP_IDX_END) - DISP_IDX_START) *
      BOX_HEIGHT;
    const flagDisp = curIdx < DISP_IDX_START || DISP_IDX_END < curIdx;
    const opacity = flagDisp ? 0 : 1;
    const zIndex = flagDisp
      ? 0
      : curIdx === DISP_IDX_END || curIdx === DISP_IDX_START
      ? 1
      : 2;

    const styledListDiv = refStyledListDiv.current as HTMLDivElement;
    const styledButtonDiv = refStyledButtonDiv.current as HTMLDivElement;
    const moveX = styledButtonDiv.offsetWidth - 480;
    return {
      x: mouseClickIndex === idx && flagClick ? moveX : 0,
      y: mouseClickIndex === idx && flagClick ? 0 : y,
      height:
        mouseClickIndex === idx && flagClick ? 480 : BOX_HEIGHT - BOX_MARGIN,
      width:
        mouseClickIndex === idx && flagClick ? 480 : styledListDiv.offsetWidth,
      opacity,
      zIndex: mouseClickIndex === idx && flagClick ? 3 : zIndex,
      scale: mouseOverIndex === idx && flagMouseEnter ? 1.2 : 1.0,
      immediate: (n: string) => n === "zIndex",
    };
  };

  //springsの作成と初期スタイルの設定
  const springs = useSprings(
    ELEM_NUM,
    ELEM_LIST_DUMMY.map((_, idx) => {
      return makeStyle(idx);
    })
  );

  React.useEffect(() => {
    setFlagResize(true);
    const listner = () => {
      setFlagResize((state) => !state);
    };
    window.addEventListener("resize", listner);
    return () => window.removeEventListener("resize", listner);
  }, [flagResize]);

  //配列の先頭を最後尾にする
  const handleUpperClick = () => {
    if (flagClick) {
      return;
    } else {
      const curList = Array.from(order);
      const firstIdx = curList.shift() as number;
      curList.push(firstIdx);
      setOrder(curList);
    }
  };

  //配列の最後尾を先頭にする
  const handleLowerClick = () => {
    if (flagClick) {
      return;
    } else {
      const curList = Array.from(order);
      const lastIdx = curList.pop() as number;
      curList.unshift(lastIdx);
      setOrder(curList);
    }
  };

  //カーソル がのったときは要素を拡大する
  const handleOnMouseEnter = (idx: number) => {
    if (flagClick) {
      return;
    } else {
      setMouseOverIndex(idx);
      setFlagMouseEnter(true);
    }
  };
  const handleOnMouseLeave = () => {
    setFlagMouseEnter(false);
  };

  //クリック時のアクション
  const handleBoxClick = (idx: number) => {
    if (!flagClick) {
      setMouseClickIndex(idx);
    }
    setFlagClick(true);
    setCoverCont(LIST_IMG_OBJ[idx].cont);
  };
  const handleBackButton = () => {
    setFlagClick(false);
  };

  return (
    <WrapperDiv>
      <AnimatedCoverDiv style={spring}>{coverCont}</AnimatedCoverDiv>
      <AnimatedListDiv ref={refStyledListDiv}>
        <StyledButton onClick={handleUpperClick}>Up</StyledButton>
        <AnimatedBoxListsDiv
          style={{
            height: `${BOX_HEIGHT * (DISP_IDX_END - DISP_IDX_START + 1)}px`,
          }}
        >
          {springs.map((spring, idx) => (
            <AnimatedBoxDiv
              key={idx}
              style={{ ...spring }}
              onClick={() => {
                handleBoxClick(idx);
              }}
              onMouseEnter={() => {
                handleOnMouseEnter(idx);
              }}
              onMouseLeave={handleOnMouseLeave}
            >
              <StyledImg src={LIST_IMG_OBJ[idx].img} />
            </AnimatedBoxDiv>
          ))}
        </AnimatedBoxListsDiv>
        <StyledButton onClick={handleLowerClick}>Down</StyledButton>
      </AnimatedListDiv>
      <AnimatedStyledButtonDiv ref={refStyledButtonDiv} style={spring}>
        <StyledButton onClick={handleBackButton}>Back</StyledButton>
      </AnimatedStyledButtonDiv>
    </WrapperDiv>
  );
};

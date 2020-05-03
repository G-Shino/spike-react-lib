import * as React from "react";
import styles from "./style";
import { useSprings } from "react-spring";

const {
  WrapperDiv,
  StyledListDiv,
  StyledButtonDiv,
  AnimatedBoxListsDiv,
  AnimatedBoxDiv,
  StyledButton,
} = styles;

interface FileInputProps {}

// 上限と下限内にする
const clamp = (x: number, min: number, max: number) => {
  if (x < min) return min;
  else if (x > max) return max;
  else return x;
};

// 実際の要素数
const ELEM_NUM = 7;
const ELEM_LIST_DUMMY = Array(7).fill(0);
// 表示するインデックス先頭と最後
const DISP_IDX_START = 1;
const DISP_IDX_END = 5;

//対象要素の高さ
const BOX_HEIGHT = 100;
const BOX_MARGIN = 20;

export const SpikeExhibitionTry2: React.FC<FileInputProps> = ({}) => {
  const [mouseOverIndex, setMouseOverIndex] = React.useState(0);
  const [mouseClickIndex, setMouseClickIndex] = React.useState(0);
  const [flagClick, setFlagClick] = React.useState(false);
  const [flagMouseEnter, setFlagMouseEnter] = React.useState(false);
  const [flagResize, setFlagResize] = React.useState(false);
  const [order, setOrder] = React.useState(
    ELEM_LIST_DUMMY.map((_, index) => index)
  );

  const refStyledListDiv = React.useRef<HTMLDivElement>(
    document.createElement("div")
  );
  const refStyledButtonDiv = React.useRef<HTMLDivElement>(
    document.createElement("div")
  );

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
      onRest: () => {
        if (flagClick) {
          console.log(mouseClickIndex);
        }
      },
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
  };
  const handleBackButton = () => {
    setFlagClick(false);
  };

  return (
    <WrapperDiv>
      <StyledListDiv ref={refStyledListDiv}>
        <StyledButton onClick={handleUpperClick}></StyledButton>
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
            ></AnimatedBoxDiv>
          ))}
        </AnimatedBoxListsDiv>
        <StyledButton onClick={handleLowerClick}></StyledButton>
      </StyledListDiv>
      <StyledButtonDiv ref={refStyledButtonDiv}>
        <StyledButton onClick={handleBackButton}>戻る</StyledButton>
      </StyledButtonDiv>
    </WrapperDiv>
  );
};

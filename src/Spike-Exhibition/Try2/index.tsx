import * as React from "react";
import styles from "./style";
import { useSprings } from "react-spring";

const {
  WrapperDiv,
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
// 表示するインデックス先頭と最後
const DISP_IDX_START = 1;
const DISP_IDX_END = 4;

//対象要素の高さ
const BOX_HEIGHT = 100;

export const SpikeExhibitionTry2: React.FC<FileInputProps> = ({}) => {
  //springsの作成と初期スタイルの設定
  const [springs, setSprings] = useSprings(ELEM_NUM, (idx) => {
    const dispPos =
      (clamp(idx, DISP_IDX_START, DISP_IDX_END) - DISP_IDX_START) * BOX_HEIGHT;
    const flagDisp = idx < DISP_IDX_START || DISP_IDX_END < idx;
    return {
      x: 0,
      y: dispPos,
      opacity: flagDisp ? 0 : 1,
      zIndex: flagDisp ? 0 : 1,
      scale: 1,
    };
  });
  //配列を格納するため
  const order = React.useRef(springs.map((_, index) => index));

  //クリックした時用のsetSpringsに渡す、objを作る関数
  const makeStyle = (idx: number) => {
    const curIdx = order.current.indexOf(idx);
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
    const props = {
      x: 0,
      y,
      opacity,
      zIndex,
      immediate: (n: string) => n === "zIndex",
    };
    return props;
  };

  //配列の先頭を最後尾にする
  const handleUpperClick = () => {
    const firstIdx = order.current.shift() as number;
    order.current.push(firstIdx);
    setSprings(makeStyle);
  };

  //配列の最後尾を先頭にする
  const handleLowerClick = () => {
    const lastIdx = order.current.pop() as number;
    order.current.unshift(lastIdx);
    setSprings(makeStyle);
  };

  //カーソル がのったときは要素を拡大する
  const handleOnMouseEnter = (idx: number) => {
    setSprings((i: number) => ({
      scale: idx === i ? 1.2 : 1.0,
    }));
  };
  const handleOnMouseLeave = () => {
    setSprings((i: number) => ({
      scale: 1.0,
    }));
  };

  //クリックしたときに移動and拡大
  const handleBoxClick = (idx: number) => {
    setSprings((i: number) => ({
      x: idx === i ? 500 : 0,
    }));
  };

  return (
    <WrapperDiv>
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
            onMouseEnter={() => {
              handleOnMouseEnter(idx);
            }}
            onMouseLeave={handleOnMouseLeave}
            onClick={() => {
              handleBoxClick(idx);
            }}
          ></AnimatedBoxDiv>
        ))}
      </AnimatedBoxListsDiv>
      <StyledButton onClick={handleLowerClick}></StyledButton>
    </WrapperDiv>
  );
};

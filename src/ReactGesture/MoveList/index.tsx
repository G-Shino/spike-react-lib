import * as React from "react";
import styles from "./style";
import { useRef } from "react";
import { useDrag } from "react-use-gesture";
import { useSprings } from "react-spring";

const { WrapperDiv, AnimatedDiv } = styles;

interface FileInputProps {}

const clamp = (x: number, min: number, max: number) => {
  if (x < min) return min;
  else if (x > max) return max;
  else return x;
};

const swap = (arr: number[], idx1: number, idx2: number) => {
  const newArr = Array.from(arr);
  const x = newArr[idx1];
  newArr[idx1] = newArr[idx2];
  newArr[idx2] = x;
  return newArr;
};
export const ReactGestureMoveList: React.FC<FileInputProps> = ({}) => {
  const elemNumber = 5;
  const [springProps, setSpringProps] = useSprings(elemNumber, (idx) => ({
    translateY: 0 + idx * 108,
    scale: 1.0,
    zIndex: 0,
    boxShadow: "0 0 4px gray",
  }));

  const order = useRef<number[]>(springProps.map((_, index) => index));
  const prevOrder = useRef<number[]>(springProps.map((_, index) => index));

  const bind = useDrag(({ args: [oriIdx], down, movement: [x, y] }) => {
    const preIdx = prevOrder.current.indexOf(oriIdx);
    const curIdx = order.current.indexOf(oriIdx);
    const curRow = clamp(Math.round(preIdx + y / 108), 0, elemNumber - 1);
    const newOrder = swap(order.current, curRow, curIdx);
    setSpringProps((i: number) =>
      down && i === oriIdx
        ? {
            translateY: preIdx * 108 + y,
            scale: 1.1,
            zIndex: 1,
            boxShadow: "0 0 16px gray",
            immediate: (n) => n === "translateY" || n === "zIndex",
          }
        : {
            translateY: newOrder.indexOf(i) * 108,
            scale: 1.0,
            zIndex: 0,
            boxShadow: "0 0 4px gray",
            immediate: false,
          }
    );
    order.current = newOrder;
    if (!down) prevOrder.current = newOrder;
  });

  return (
    <WrapperDiv>
      {springProps.map((style, idx) => (
        <AnimatedDiv key={idx} {...bind(idx)} style={{ ...style }} />
      ))}
    </WrapperDiv>
  );
};

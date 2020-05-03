import * as React from "react";
import styles from "./style";
import { useDrag, useGesture } from "react-use-gesture";
import { useSpring } from "react-spring";

const { WrapperDiv, AnimatedDiv } = styles;

interface FileInputProps {}

export const ReactGestureSimpleExample: React.FC<FileInputProps> = ({}) => {
  const [{ x, y }, setXY] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    setXY({ x: down ? mx : 0, y: down ? my : 0 });
  });

  const [{ x2, y2 }, setXY2] = useSpring(() => ({ x2: 0, y2: 0 }));
  const bind2 = useGesture({
    onDrag: ({ down, offset: [x2, y2] }) => setXY2({ x2, y2 }),
    onMouseDown: () => console.log("mousedown"),
  });
  return (
    <WrapperDiv>
      <p>Sample</p>
      <AnimatedDiv {...bind()} style={{ translateX: x, translateY: y }} />
      <br />
      <AnimatedDiv {...bind2()} style={{ translateX: x2, translateY: y2 }} />
    </WrapperDiv>
  );
};

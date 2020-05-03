import * as React from "react";
import styles from "./style";
import { useTrail, animated, config } from "react-spring";

const { WrapperDiv, StyledDiv } = styles;

interface FileInputProps {}

export const CssTransitionByReactSpring4: React.FC<FileInputProps> = ({}) => {
  const msg = "移動するよ。";
  const [{ x, y }, setXY] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef<HTMLDivElement>(null);
  const trails = useTrail(msg.length, {
    config: config.gentle,
    left: `${x}px`,
    top: `${y}px`,
    position: "absolute" as "absolute",
  });
  return (
    <WrapperDiv>
      <p>useTrail 連動する</p>
      <StyledDiv
        ref={divRef}
        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
          const div = divRef.current as HTMLDivElement;
          const bounds = div.getBoundingClientRect();
          setXY({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
        }}
      >
        {trails.map((trail, idx) => (
          <animated.span style={{ ...trail, paddingLeft: idx * 29 }}>
            {msg[idx]}
          </animated.span>
        ))}
      </StyledDiv>
    </WrapperDiv>
  );
};

import * as React from "react";
import styles from "./style";
import { useSprings, animated, config } from "react-spring";

const { WrapperDiv, StyledDiv } = styles;

interface FileInputProps {}

export const CssTransitionByReactSpring3: React.FC<FileInputProps> = ({}) => {
  const msg = "拡大するよ。";
  const [springs, setSprings] = useSprings(msg.length, (idx) => ({
    config: config.wobbly,
    fontSize: `24pt`,
  }));
  console.log(springs);
  return (
    <WrapperDiv>
      <p>useSprings 個々で違うトリガーになる</p>
      <StyledDiv>
        {springs.map((item, idx) => (
          <animated.span
            style={{ ...item, verticalAlign: "top" }}
            onMouseEnter={() =>
              setSprings((i: number) => (i === idx ? { fontSize: "48pt" } : {}))
            }
            onMouseLeave={() =>
              setSprings((i: number) => (i === idx ? { fontSize: "24pt" } : {}))
            }
          >
            {msg[idx]}
          </animated.span>
        ))}
      </StyledDiv>
    </WrapperDiv>
  );
};

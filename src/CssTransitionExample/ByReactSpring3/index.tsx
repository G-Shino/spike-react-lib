import * as React from "react";
import styles from "./style";
import { useSprings, animated, config } from "react-spring";

const { WrapperDiv, StyledDiv } = styles;

interface FileInputProps {}

export const CssTransitionByReactSpring3: React.FC<FileInputProps> = ({}) => {
  const msg = "拡大するよ。";
  const letterList = msg.split("");
  const [springs, setSprings] = useSprings(msg.length, (idx) => ({
    config: config.wobbly,
    fontSize: `24pt`,
  }));

  const [index, setIndex] = React.useState<number | null>(null);
  const springs2 = useSprings(
    letterList.length,
    letterList.map((letter, idx) => ({
      config: config.wobbly,
      fontSize: idx !== null && idx === index ? "48pt" : "24pt",
      verticalAlign: "top",
    }))
  );
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
      <br />
      <StyledDiv>
        {springs2.map((prop, idx) => (
          <animated.span
            style={prop}
            onMouseEnter={() => setIndex(idx)}
            onMouseLeave={() => setIndex(null)}
          >
            {letterList[idx]}
          </animated.span>
        ))}
      </StyledDiv>
    </WrapperDiv>
  );
};

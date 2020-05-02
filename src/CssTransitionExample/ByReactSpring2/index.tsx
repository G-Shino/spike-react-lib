import * as React from "react";
import styles from "./style";
import { useSpring, animated } from "react-spring";

const { WrapperDiv, StyledDiv } = styles;

interface FileInputProps {}

export const CssTransitionByReactSpring2: React.FC<FileInputProps> = ({}) => {
  const [enter, setEnter] = React.useState(false);
  const AnimatedDiv = animated(StyledDiv);

  const spring = useSpring({
    fontSize: enter ? "48pt" : "24pt",
    color: enter ? "red" : "green",
  });

  const [spring2, setSpring2] = useSpring(() => ({
    fontSize: "24pt",
    color: "green",
  }));
  const handleOnMouseEnter = () => {
    const style = {
      fontSize: "48pt",
      color: "red",
    };
    setSpring2(style);
  };
  const handleOnMouseLeave = () => {
    const style = {
      fontSize: "24pt",
      color: "green",
    };
    setSpring2(style);
  };

  return (
    <WrapperDiv>
      <p>useSpring ②種類のやり方がある</p>
      <AnimatedDiv
        style={spring2}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        Spring Div
      </AnimatedDiv>
      <br />
      <p>
        こっちのやり方の方が良さそう　上はなぜか動かなくなるパターンがある
        9だと大丈夫っぽい
      </p>
      <AnimatedDiv
        style={spring}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
      >
        Spring Div
      </AnimatedDiv>
      <br />
    </WrapperDiv>
  );
};

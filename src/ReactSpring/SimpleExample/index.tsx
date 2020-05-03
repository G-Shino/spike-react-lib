import * as React from "react";
import styles from "./style";
import { useSpring, animated } from "react-spring";

const { WrapperDiv, StyledDiv } = styles;

interface FileInputProps {}

export const ReactSpringSimpleExample: React.FC<FileInputProps> = ({}) => {
  const [isActive, setIsActive] = React.useState(false);
  const props1 = useSpring({ opacity: 1, from: { opacity: 0 } });
  const props2 = useSpring({ opacity: isActive ? 1 : 0 });

  const { o } = useSpring({ o: 10, from: { o: 0 } });
  const AnimatedDiv = animated(StyledDiv);

  return (
    <WrapperDiv>
      <p>
        ReactSpringsを使用したもの。汎用性が高そう。react use
        gestureと組み合わせるとすごいらしい。
      </p>
      <animated.p>{o.interpolate((n) => n.toFixed(3))}</animated.p>
      <animated.div
        style={{ ...props1, backgroundColor: "#000", width: 300, height: 300 }}
        role="presentation"
      />
      <br />
      <AnimatedDiv style={{ ...props1 }} />
      <br />
      <AnimatedDiv style={{ ...props2 }} />
      <button onClick={() => setIsActive(!isActive)}>osite</button>
    </WrapperDiv>
  );
};

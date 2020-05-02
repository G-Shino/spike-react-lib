import * as React from "react";
import { useState } from "react";
import styles from "./style";
import { Transition } from "react-transition-group";

const { WrapperDiv, FlipCardDiv, FrontCardDiv, BackCardDiv } = styles;

interface CssContents {
  transition: string;
  transform: string;
}
const FLIP_STYLE: { [index: string]: CssContents } = {
  entering: {
    transition: "all .5s ease",
    transform: "perspective(25rem) rotateY(-180deg)",
  },
  entered: {
    transition: "",
    transform: "perspective(25rem) rotateY(-180deg)",
  },
  exiting: {
    transition: "all .5s ease",
    transform: "perspective(25rem) rotateY(-360deg)",
  },
  exited: {
    transition: "",
    transform: "perspective(25rem) rotateY(0)",
  },
};

interface FlipCardProps {
  flip: boolean;
  flipToFront: () => void;
  flipToBack: () => void;
}

const FlipCard = ({ flip, flipToFront, flipToBack }: FlipCardProps) => {
  const [text1, setText1] = useState("start");
  const [text2, setText2] = useState("start");

  const callBacks = {
    onEnter: () => setText2("start entering!"),
    onEntered: () => setText2("entered!"),
    onExit: () => setText1("start exiting"),
    onExited: () => setText1("exited"),
  };

  return (
    <Transition in={flip} timeout={1000} {...callBacks}>
      {(state: string) => (
        <FlipCardDiv style={FLIP_STYLE[state]}>
          <FrontCardDiv onClick={flipToBack}>{text1}</FrontCardDiv>
          <BackCardDiv className="back" onClick={flipToFront}>
            {text2}
          </BackCardDiv>
        </FlipCardDiv>
      )}
    </Transition>
  );
};

interface FileInputProps {}

export const CssTransitionByReactTransitionGroup1: React.FC<FileInputProps> = ({}) => {
  const [flip, setFlip] = useState(false);
  return (
    <WrapperDiv>
      <p>
        react transition groupというライブラリを利用。管理方法を提供してくれる。
      </p>
      <FlipCard
        flip={flip}
        flipToBack={() => setFlip(true)}
        flipToFront={() => setFlip(false)}
      />
      <button className="btn" onClick={() => setFlip(!flip)}>
        Flip to {flip ? "front" : "back"}
      </button>
    </WrapperDiv>
  );
};

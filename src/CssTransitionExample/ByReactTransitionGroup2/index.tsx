import * as React from "react";
import { useState } from "react";
import { Transition } from "react-transition-group";

import styles from "./style";

const { WrapperDiv, AnimationDiv, FadeDiv } = styles;

interface FileInputProps {}

export const CssTransitionByReactTransitionGroup2: React.FC<FileInputProps> = ({}) => {
  const [animFlag, setAnimFlag] = useState(false);
  const [animFlag2, setAnimFlag2] = useState(false);
  return (
    <WrapperDiv>
      <p>
        StyledComponent側に処理を綺麗に組み込んだ形式 <br />
        stateについての分岐がstyledcomponent側に記述されることになる。
        <br />
        が、stateとしてありえるものがきまっているのでありかもしれない。
      </p>
      <Transition in={animFlag} timeout={500}>
        {(state: string) => <AnimationDiv state={state}>Hello</AnimationDiv>}
      </Transition>
      <button onClick={() => setAnimFlag(!animFlag)}>Animate</button>
      <br />
      <Transition in={animFlag2} timeout={100}>
        {(state: string) => <FadeDiv state={state}>Fade</FadeDiv>}
      </Transition>
      <button onClick={() => setAnimFlag2(!animFlag2)}>Fade</button>
    </WrapperDiv>
  );
};

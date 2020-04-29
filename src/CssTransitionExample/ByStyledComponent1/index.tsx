import * as React from "react";
import { useState } from "react";
import styles from "./style";

const { WrapperDiv, ContentsDiv, Button } = styles;

interface FileInputProps {}

export const CSSTransitionByStyledComponent1: React.FC<FileInputProps> = ({}) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <WrapperDiv>
      <p>classを付け替えるversion</p>
      <ContentsDiv className={`${isButtonPressed ? "is-slided" : ""}`}>
        <Button
          onClick={() => {
            setIsButtonPressed(!isButtonPressed);
          }}
        >
          押してみて
        </Button>
      </ContentsDiv>
    </WrapperDiv>
  );
};

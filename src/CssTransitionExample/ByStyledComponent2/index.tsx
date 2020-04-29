import * as React from "react";
import { useState } from "react";
import styles from "./style";

const { WrapperDiv, ContentsDiv, Button } = styles;

interface FileInputProps {}

export const CSSTransitionByStyledComponent2: React.FC<FileInputProps> = ({}) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <WrapperDiv>
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

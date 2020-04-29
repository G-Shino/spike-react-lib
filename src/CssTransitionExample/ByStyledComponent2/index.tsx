import * as React from "react";
import { useState } from "react";
import styles, { ButtonProps } from "./style";

const { WrapperDiv, ContentsDiv, Button } = styles;

interface FileInputProps {}

export const CSSTransitionByStyledComponent2: React.FC<FileInputProps> = ({}) => {
  const [isSlided, setIsSlided] = useState(false);

  const buttonProps: ButtonProps = { isSlided };
  return (
    <WrapperDiv>
      <p>styled componentに変数を与えるversion</p>
      <ContentsDiv {...buttonProps}>
        <Button
          onClick={() => {
            setIsSlided(!isSlided);
          }}
        >
          押してみて
        </Button>
      </ContentsDiv>
    </WrapperDiv>
  );
};

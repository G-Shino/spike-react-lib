import * as React from "react";
import styles from "./style";

const { WrapperDiv } = styles;

interface FileInputProps {}

export const Sample: React.FC<FileInputProps> = ({}) => {
  return (
    <WrapperDiv>
      <p>Sample</p>
    </WrapperDiv>
  );
};

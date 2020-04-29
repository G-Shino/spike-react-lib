import * as React from "react";
import styles from "./style";

const { StyledDiv } = styles;

interface FileInputProps {}

export const Sample: React.FC<FileInputProps> = ({}) => {
  return (
    <StyledDiv>
      <p>Sample</p>
    </StyledDiv>
  );
};

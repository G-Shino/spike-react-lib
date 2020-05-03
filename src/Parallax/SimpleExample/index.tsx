import * as React from "react";
import styles from "./style";
import { Parallax, ParallaxLayer } from "react-spring/addons";

const { WrapperDiv } = styles;

interface FileInputProps {}

export const ParallaxSimpleExample: React.FC<FileInputProps> = ({}) => {
  return (
    <WrapperDiv>
      <p>Sample</p>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "red" }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={3}
          style={{
            backgroundColor: "blue",
          }}
        ></ParallaxLayer>
      </Parallax>
    </WrapperDiv>
  );
};

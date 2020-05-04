import * as React from "react";
import { Parallax, ParallaxLayer } from "react-spring/addons";

interface FileInputProps {}

export const ParallaxSimpleExample: React.FC<FileInputProps> = ({}) => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0.3} speed={0} style={{ backgroundColor: "red" }}>
        <span>Scroll down !</span>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.2}
        speed={0}
        style={{
          backgroundColor: "blue",
        }}
      >
        <span>Scroll down!</span>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={3}>
        <span>I'm fast</span>
      </ParallaxLayer>

      <ParallaxLayer offset={-0.2} speed={1.3}>
        <span>I'm going in the other direction!</span>
      </ParallaxLayer>
    </Parallax>
  );
};

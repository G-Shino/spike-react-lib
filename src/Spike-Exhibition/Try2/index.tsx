import * as React from "react";
import { useState } from "react";
import styles from "./style";
import Yam from "./../../../data/Yam.jpg";

const { WrapperDiv, ImageDiv, Image, Button } = styles;

interface FileInputProps {}

export const SpikeExhibitionTry2: React.FC<FileInputProps> = ({}) => {
  const [flagClick, setFlagClick] = useState(false);
  const [flagMouseOver, setFlagMouseOver] = useState(false);
  return (
    <WrapperDiv>
      <p>Sample</p>
      <ImageDiv
        flagClick={flagClick}
        flagMouseOver={flagMouseOver}
        onClick={() => {
          setFlagClick(true);
        }}
        onMouseEnter={() => {
          setFlagMouseOver(true);
        }}
        onMouseLeave={() => {
          setFlagMouseOver(false);
        }}
      >
        <Image src={Yam} />
      </ImageDiv>
      <Button onClick={() => setFlagClick(false)}>拡大解除</Button>
    </WrapperDiv>
  );
};

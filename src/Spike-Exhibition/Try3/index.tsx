import * as React from "react";
import styles from "./style";
import { SpikeExhibitionTry2 } from "./../Try2";
import { useTransition } from "react-spring";

const {
  WrapperDiv,
  AnimatedWrapperDiv,
  CoverDiv,
  AreaADiv,
  AreaBDiv,
  SquareDiv,
} = styles;

interface FileInputProps {}

interface PagesStyle {
  [index: string]: any;
}
const pages = [
  ({ style }: PagesStyle) => (
    <AnimatedWrapperDiv style={{ ...style }}>
      <SpikeExhibitionTry2></SpikeExhibitionTry2>
    </AnimatedWrapperDiv>
  ),
  ({ style }: PagesStyle) => (
    <AnimatedWrapperDiv style={{ ...style }}>
      <CoverDiv>
        <AreaADiv></AreaADiv>
        <AreaBDiv>
          <SquareDiv></SquareDiv>
        </AreaBDiv>
      </CoverDiv>
    </AnimatedWrapperDiv>
  ),
];

export const SpikeExhibitionTry3: React.FC<FileInputProps> = ({}) => {
  const [index, setIndex] = React.useState(0);
  const onClick = React.useCallback(
    () => setIndex((state) => (state + 1) % 2),
    []
  );
  const transitions = useTransition(index, (page) => page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <WrapperDiv>
      <p>Sample</p>
      <button onClick={onClick}></button>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props}></Page>;
      })}
    </WrapperDiv>
  );
};

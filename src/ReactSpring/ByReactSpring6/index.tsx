import * as React from "react";
import styles from "./style";
import { useTransition } from "react-spring";

const { WrapperDiv, AnimatedBox } = styles;

interface FileInputProps {}

interface PagesStyle {
  [index: string]: any;
}
const pages = [
  ({ style }: PagesStyle) => (
    <AnimatedBox style={{ ...style, background: "lightpink" }}>A</AnimatedBox>
  ),
  ({ style }: PagesStyle) => (
    <AnimatedBox style={{ ...style, background: "lightblue" }}>B</AnimatedBox>
  ),
  ({ style }: PagesStyle) => (
    <AnimatedBox style={{ ...style, background: "lightgreen" }}>C</AnimatedBox>
  ),
];
export const ReactSpring6: React.FC<FileInputProps> = ({}) => {
  const [index, set] = React.useState(0);
  const onClick = React.useCallback(() => set((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (page) => page, {
    from: { opacity: 0, x: "100%" },
    enter: { opacity: 1, x: "0%" },
    leave: { opacity: 0, x: "-50%" },
  });
  return (
    <WrapperDiv onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        console.log(item);
        console.log(props);
        console.log(key);
        const Page = pages[item];
        return <Page key={key} style={props}></Page>;
      })}
    </WrapperDiv>
  );
};

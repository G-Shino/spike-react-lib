import styled from "styled-components";

const WrapperDiv = styled.div``;

export interface TransitionProps {
  state: string;
}

const AnimationDiv = styled.div`
  transition: 0.5s;
  width: 300px;
  height: 200px;
  transform: translateX(
    ${(props: TransitionProps) =>
      props.state === "entering" || props.state === "entered" ? 400 : 0}px
  );
  background-color: ${(props: TransitionProps) => {
    switch (props.state) {
      case "entering":
        return "red";
      case "entered":
        return "blue";
      case "exiting":
        return "green";
      case "exited":
        return "yellow";
    }
  }};
`;

const FadeDiv = styled.div`
  transition: 0.5s;
  background-color: blue;
  opacity: ${(props: TransitionProps) => (props.state === "entered" ? 1 : 0)};
  display: ${(props: TransitionProps) =>
    props.state === "exited" ? "none" : "block"};
`;

export default {
  WrapperDiv,
  AnimationDiv,
  FadeDiv,
};

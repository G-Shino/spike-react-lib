import styled from "styled-components";
import { animated } from "react-spring";

const WrapperDiv = styled.div`
  height: 300px;
`;
const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;
const AnimatedDiv = animated(StyledDiv);
export default {
  WrapperDiv,
  AnimatedDiv,
};

import styled from "styled-components";
import { animated } from "react-spring";

const WrapperDiv = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  & > div {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

const BaseAnimatedBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4rem;
`;
const AnimatedBox = animated(BaseAnimatedBox);

export default {
  WrapperDiv,
  AnimatedBox,
};

import styled from "styled-components";
import { animated } from "react-spring";

const WrapperDiv = styled.div`
  position: relative;
  height: 500px;
  width: 400px;
  margin: 0 auto;
  & > div:nth-child(1) {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  }
  & > div:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  & > div:nth-child(3) {
    background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
  }
  & > div:nth-child(4) {
    background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
  }
  & > div:nth-child(5) {
    background: linear-gradient(135deg, #bcfa89 0%, #049336 100%);
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 8px;
`;
const AnimatedDiv = animated(StyledDiv);

export default {
  WrapperDiv,
  AnimatedDiv,
};

import styled from "styled-components";

const WrapperDiv = styled.div``;

const baseCardDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlipCardDiv = styled.div`
  width: 100px;
  height: 200px;
  transform-style: preserve-3d;
  position: relative;
`;

const FrontCardDiv = styled(baseCardDiv)`
  background-color: green;
`;

const BackCardDiv = styled(baseCardDiv)`
  transform: rotateY(180deg);
  background-color: blue;
`;
export default {
  WrapperDiv,
  FlipCardDiv,
  FrontCardDiv,
  BackCardDiv,
};

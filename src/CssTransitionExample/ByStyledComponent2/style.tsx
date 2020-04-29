import styled from "styled-components";

const WrapperDiv = styled.div``;
const ContentsDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: pink;
  padding: 15px;
  transform: translateX(0px);
  transition: all 0.3s ease-out;
  &.is-slided {
    transform: translateX(200px);
  }
`;
const Button = styled.button``;

export default {
  WrapperDiv,
  ContentsDiv,
  Button,
};

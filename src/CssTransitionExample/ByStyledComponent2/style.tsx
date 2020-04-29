import styled from "styled-components";
export interface ButtonProps {
  isSlided: boolean;
}
const WrapperDiv = styled.div``;
const ContentsDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: pink;
  padding: 15px;
  transition: all 0.3s ease-out;
  transform: translateX(
    ${(props: ButtonProps) => (props.isSlided ? "200px" : "0px")}
  );
`;
const Button = styled.button``;

export default {
  WrapperDiv,
  ContentsDiv,
  Button,
};

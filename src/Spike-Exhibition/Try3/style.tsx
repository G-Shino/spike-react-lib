import styled from "styled-components";
import { animated } from "react-spring";

const WrapperDiv = styled.div`
  width: 100%;
  height: auto;
`;

const BaseWrapperDiv = styled.div`
  width: 100%;
  height: auto;
`;
const AnimatedWrapperDiv = animated(BaseWrapperDiv);

const CoverDiv = styled.div`
  width: 80%;
  height: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr minmax(480px, 1.5fr);
  grid-template-rows: 606px 1fr;
  grid-template-areas:
    "areaA areaB"
    "areaC areaC";
`;

const AreaADiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  grid-area: areaA;
  border-radius: 10px;
`;

const AreaBDiv = styled.div`
  grid-area: areaB;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SquareDiv = styled.div`
  width: 480px;
  height: 480px;
  background: red;
  border-radius: 10px;
`;
export default {
  WrapperDiv,
  AnimatedWrapperDiv,
  CoverDiv,
  AreaADiv,
  AreaBDiv,
  SquareDiv,
};

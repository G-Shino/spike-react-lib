import styled from "styled-components";
import { animated } from "react-spring";

const WrapperDiv = styled.div`
  width: 80%;
  height: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr minmax(500px, 1.5fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "areaA areaB"
    "areaC areaC";
`;

const BaseListDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  grid-area: areaA;
`;
const AnimatedListDiv = animated(BaseListDiv);

const BaseCoverDiv = styled.div`
  width: 100%;
  height: 600px;
  background: white;
  margin-bottom: 20px;
  border: solid 1px;
  border-radius: 10px;
  grid-area: areaA;
`;
const AnimatedCoverDiv = animated(BaseCoverDiv);

const StyledButtonDiv = styled.div`
  width: 100%;
  height: 100%;
  grid-area: areaC;
`;
const AnimatedStyledButtonDiv = animated(StyledButtonDiv);

const BaseBoxListsDiv = styled.div`
  position: relative;
  width: 100%;
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
  & > div:nth-child(6) {
    background: linear-gradient(135deg, #dc143c 0%, #ff69b4 100%);
  }
  & > div:nth-child(7) {
    background: linear-gradient(135deg, #0000aa 0%, #bdbeec 100%);
  }
`;
const AnimatedBoxListsDiv = animated(BaseBoxListsDiv);

const BaseBoxDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid 1px;
  border-radius: 10px;
  overflow: hidden;
`;
const AnimatedBoxDiv = animated(BaseBoxDiv);

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default {
  WrapperDiv,
  AnimatedListDiv,
  AnimatedCoverDiv,
  AnimatedStyledButtonDiv,
  AnimatedBoxListsDiv,
  AnimatedBoxDiv,
  StyledButton,
  StyledImg,
};

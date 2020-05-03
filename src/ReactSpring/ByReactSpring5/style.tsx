import styled from "styled-components";
import { animated } from "react-spring";

const WrapperDiv = styled.div``;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  margin-top: 8px;
`;

const BaseAnimatedItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 60px;
  font-size: 2rem;
`;
const AnimatedItem = animated(BaseAnimatedItem);

const BaseAnimatedBox = styled.div``;
const AnimatedBox = animated(BaseAnimatedBox);

export default {
  WrapperDiv,
  GridContainer,
  AnimatedItem,
  AnimatedBox,
};

interface ColorScehme {
  name: string;
  hex: string;
  fontColor: string;
}
export const colorScehmes: ColorScehme[] = [
  {
    name: "Red munsell",
    hex: "#ec0b43",
    fontColor: "#fff",
  },
  {
    name: "Blue munsell",
    hex: "#048ba8",
    fontColor: "#fff",
  },
  {
    name: "Caribbean green",
    hex: "#16db93",
    fontColor: "#000",
  },
  {
    name: "Maize",
    hex: "#efea5a",
    fontColor: "#000",
  },
  {
    name: "Neon carrot",
    hex: "#f29e4c",
    fontColor: "#000",
  },
];

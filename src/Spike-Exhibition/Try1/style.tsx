import styled from "styled-components";

const WrapperDiv = styled.div`
  height: 1000px;
`;

interface ImageDivProps {
  flagClick: boolean;
  flagMouseOver: boolean;
}

const ImageDiv = styled.div`
  width: 400px;
  height: ${(props: ImageDivProps) => (props.flagClick ? 400 : 50)}px;
  border: 1px solid;
  transition: all 1s ease;
  transform: translateX(
      ${(props: ImageDivProps) => (props.flagClick ? 500 : 0)}px
    )
    scaleX(
      ${(props: ImageDivProps) =>
        props.flagMouseOver && !props.flagClick ? 1.2 : 1}
    )
    scaleY(
      ${(props: ImageDivProps) =>
        props.flagMouseOver && !props.flagClick ? 1.2 : 1}
    );
`;

const Button = styled.button``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default {
  WrapperDiv,
  ImageDiv,
  Image,
  Button,
};

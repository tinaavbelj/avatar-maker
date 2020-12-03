import React, { useState } from "react";
import styled from "styled-components";

import Avatar from "./Avatar";
import Color from "./Color";
import Hair from "./Hair";
import Shape from "./Shape";

import {
  colors as c,
  contentWidthNarrow,
  paddingMedium,
  paddingSmall,
  device,
} from "../constants/variables";

const Home = () => {
  const [colors, setColors] = useState({
    shirt: c.shirt,
    skin: c.skin,
    bg: c.bg,
    hair: c.hair,
  });

  const [shape, setShape] = useState("rounded-square");

  const [hair, setHair] = useState("short");

  const handleColorChange = (value, name) => {
    setColors((prevColors) => ({ ...prevColors, [name]: value }));
  };

  const handleShapeChange = (value) => {
    setShape(value);
  };

  const handleHairChange = (value) => {
    setHair(value);
  };

  return (
    <HomeWrapper>
      <Content>
        <Title>Avatar Maker</Title>
        <Avatar colors={colors} shape={shape} hair={hair} />
        <ShapeWrapper>
          <Shape shape={shape} onShapeChange={handleShapeChange} />
        </ShapeWrapper>
        <ColorWrapper>
          <Color colors={colors} onColorChange={handleColorChange} />
        </ColorWrapper>
        <Hair hair={hair} onHairChange={handleHairChange} />
      </Content>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  padding: ${paddingSmall};
  text-align: center;

  @media ${device.laptop} {
    padding: ${paddingMedium} ${paddingSmall};
  }
`;

const Content = styled.div`
  max-width: ${contentWidthNarrow};
  margin: 0 auto;
`;

const ShapeWrapper = styled.div`
  margin: ${paddingMedium} 0 32px 0;
`;

const ColorWrapper = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 32px;
  margin-bottom: ${paddingMedium};
`;

export default Home;

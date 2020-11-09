import React from "react";
import styled from "styled-components";

import { paddingSmall } from "../constants/variables";

import ColorElement from "./ColorElement";

const Color = ({ colors, onColorChange }) => {
  return (
    <ColorWrapper>
      <Title>Colors</Title>
      <Options>
        <Element>
          <ColorElement
            color={colors.shirt}
            name={"shirt"}
            onColorChange={onColorChange}
          />
        </Element>
        <Element>
          <ColorElement
            color={colors.skin}
            name={"skin"}
            onColorChange={onColorChange}
          />
        </Element>
        <Element>
          <ColorElement
            color={colors.bg}
            name={"bg"}
            onColorChange={onColorChange}
          />
        </Element>
        <Element>
          <ColorElement
            color={colors.hair}
            name={"hair"}
            onColorChange={onColorChange}
          />
        </Element>
      </Options>
    </ColorWrapper>
  );
};

const ColorWrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-weight: 800;
  margin-bottom: ${paddingSmall};
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
`;

const Element = styled.div`
  &:not(:first-child) {
    margin-left: 8px;
  }
`;

export default Color;

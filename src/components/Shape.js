import React from "react";
import styled, { css } from "styled-components";

import { colors, paddingSmall } from "../constants/variables";

import { ReactComponent as Circle } from "../assets/images/shape-circle.svg";
import { ReactComponent as RoundedSquare } from "../assets/images/shape-round.svg";
import { ReactComponent as Square } from "../assets/images/shape-square.svg";

const Shape = ({ shape, onShapeChange }) => {
  return (
    <ShapeWrapper>
      <Title>Shape</Title>
      <Options>
        <Element onClick={() => onShapeChange("square")}>
          <StyledSquare selectedShape={shape === "square"} />
        </Element>
        <Element onClick={() => onShapeChange("rounded-square")}>
          <StyledRoundedSquare selectedShape={shape === "rounded-square"} />
        </Element>
        <Element onClick={() => onShapeChange("circle")}>
          <StyledCircle selectedShape={shape === "circle"} />
        </Element>
      </Options>
    </ShapeWrapper>
  );
};

const ShapeWrapper = styled.div`
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
    margin-left: 16px;
  }
`;

const StyledSquare = styled(Square)`
  width: 35px;
  height: 35px;
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${({ selectedShape }) =>
    selectedShape &&
    css`
      rect {
        stroke: ${colors.black};
        fill: ${colors.black};
      }

      path {
        stroke: ${colors.black};
        fill: ${colors.black};
      }
    `};
`;

const StyledRoundedSquare = styled(RoundedSquare)`
  width: 35px;
  height: 35px;

  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${({ selectedShape }) =>
    selectedShape &&
    css`
      rect {
        stroke: ${colors.black};
        fill: ${colors.black};
      }

      path {
        stroke: ${colors.black};
        fill: ${colors.black};
      }
    `};
`;

const StyledCircle = styled(Circle)`
  width: 35px;
  height: 35px;

  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${({ selectedShape }) =>
    selectedShape &&
    css`
      circle {
        stroke: ${colors.black};
        fill: ${colors.black};
      }

      path {
        stroke: ${colors.black};
        fill: ${colors.black};
      }
    `};
`;

export default Shape;

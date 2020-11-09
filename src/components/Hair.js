import React from "react";
import styled, { css } from "styled-components";

import { paddingSmall, colors } from "../constants/variables";

import { ReactComponent as LongHair } from "../assets/images/hair-long.svg";
import { ReactComponent as ShortHair } from "../assets/images/hair-short.svg";
import { ReactComponent as BunHair } from "../assets/images/hair-bun.svg";
import { ReactComponent as SwirlHair } from "../assets/images/hair-swirl.svg";

const Hair = ({ hair, onHairChange }) => {
  return (
    <HairWrapper>
      <Title>Hair</Title>
      <Options>
        <Element onClick={() => onHairChange("long")}>
          <StyledLongHair selectedHair={hair === "long"} />
        </Element>
        <Element onClick={() => onHairChange("short")}>
          <StyledShortHair selectedHair={hair === "short"} />
        </Element>
        <Element onClick={() => onHairChange("bun")}>
          <StyledBunHair selectedHair={hair === "bun"} />
        </Element>
        <Element onClick={() => onHairChange("swirl")}>
          <StyledSwirlHair selectedHair={hair === "swirl"} />
        </Element>
      </Options>
    </HairWrapper>
  );
};

const HairWrapper = styled.div`
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

const StyledLongHair = styled(LongHair)`
  width: 40px;
  height: 40px;
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${({ selectedHair }) =>
    selectedHair &&
    css`
      rect {
        stroke: ${colors.white};
        fill: ${colors.black};
      }

      path {
        stroke: ${colors.white};
        fill: ${colors.black};
      }
    `};
`;

const StyledShortHair = styled(ShortHair)`
  width: 40px;
  height: 40px;
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${({ selectedHair }) =>
    selectedHair &&
    css`
      rect {
        stroke: ${colors.white};
        fill: ${colors.black};
      }

      path {
        stroke: ${colors.white};
        fill: ${colors.black};
      }
    `};
`;

const StyledBunHair = styled(BunHair)`
  width: 40px;
  height: 40px;
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${({ selectedHair }) =>
    selectedHair &&
    css`
      rect {
        stroke: ${colors.white};
        fill: ${colors.black};
      }

      path {
        stroke: ${colors.white};
        fill: ${colors.black};
      }
    `};
`;

const StyledSwirlHair = styled(SwirlHair)`
  width: 40px;
  height: 40px;
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${({ selectedHair }) =>
    selectedHair &&
    css`
      rect {
        stroke: ${colors.white};
        fill: ${colors.black};
      }

      path {
        stroke: ${colors.white};
        fill: ${colors.black};
      }
    `};
`;

export default Hair;

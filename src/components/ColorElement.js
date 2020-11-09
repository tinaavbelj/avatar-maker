import React from "react";
import styled from "styled-components";

const ColorElement = ({ color, name, onColorChange }) => {
  return (
    <ColorElementWrapper>
      <Color color={color} />
      <Input
        value={color}
        onChange={(event) => onColorChange(event.target.value, name)}
      />
    </ColorElementWrapper>
  );
};

const ColorElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Color = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

const Input = styled.input`
  margin-top: 8px;
  outline: none;
  border: none;
  width: 70px;
  padding: 4px;

  &:focus {
    border-radius: 4px;
    background-color: #efefef;
  }
`;

export default ColorElement;

import React from "react";

const RoundedSquare = ({ selected }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 150 150"
  >
    <title>avatars_shapes</title>
    <rect
      x="3"
      y="3"
      width="144"
      height="144"
      rx="15"
      ry="15"
      fill="none"
      stroke="#231f20"
      stroke-miterlimit="10"
      stroke-width="8"
    />
  </svg>
);

export default RoundedSquare;

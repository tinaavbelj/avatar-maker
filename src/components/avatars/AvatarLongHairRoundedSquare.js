import React from "react";

const AvatarLongHairRoundedSquare = ({ colors }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
    viewBox="0 0 150 150"
  >
    <title>avatars</title>
    <rect width="150" height="150" rx="15" ry="15" fill={colors.bg} />
    <path
      d="M73,81l1-3.66A5.57,5.57,0,0,1,70.69,72c0-3.1,2.14-5.6,4.79-5.6,2.49,0,4.52,2.24,4.74,5.09l6.16-5.73L90.45,62a29.53,29.53,0,0,0,3.73-3.84l2.12-2.82s8.72,31,2.41,38.52c-3.76,4.48-12.4.54-18.79-3.4l8.59,32.63H66.9l5.27-36.28L73,81"
      fill={colors.skin}
    />
    <path
      d="M88.55,122.88c13.82,8.36,24.75,16.25,34.77,27.12H32.09c10-10.87,21.1-18.77,34.92-27.12H88.55Z"
      fill={colors.shirt}
    />
    <path
      d="M96.48,49.86a9.12,9.12,0,0,0-2-1.81,12.85,12.85,0,0,0-3.07-1.53,24.12,24.12,0,0,0-4-1,44.87,44.87,0,0,0-13.75-.06,24.4,24.4,0,0,0-8.92,3.2c-1.7-6.19-7.81-24.76-20-24.76-14.65,0-28.7,6.21-38.51,6.21A10.74,10.74,0,0,1,5,30l-5-.78v12.1l0.9-.27L5,41.66c7.87,1.15,8.76,10,17.92,10,9.8,0,24.51-7.52,30.07-7.52,3.93,0,8.44,3.24,10.75,5.14a20.6,20.6,0,0,0-9.34,16q0,0.4,0,.81c0,9.9,7.59,18.17,17.78,20.34L73,81l1-3.66A5.57,5.57,0,0,1,70.69,72c0-3.1,2.14-5.6,4.79-5.6,2.49,0,4.52,2.24,4.74,5.09l6.16-5.73L90.45,62a29.54,29.54,0,0,0,3.73-3.84,32.38,32.38,0,0,0,2.3-3.3c0.7-1.22,1.24-2.45.68-3.84A4.56,4.56,0,0,0,96.48,49.86Z"
      fill={colors.hair}
    />
  </svg>
);

export default AvatarLongHairRoundedSquare;

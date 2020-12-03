import React from "react";

const AvatarSwirlHairCircle = ({ colors }) => (
  <svg
    id="avatar-swirl-circle"
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
    viewBox="0 0 150 150"
  >
    <title>avatars</title>
    <circle cx="75" cy="75" r="75" fill={colors.bg} />
    <path
      d="M73,81l1-3.66A5.57,5.57,0,0,1,70.69,72c0-3.1,2.14-5.6,4.79-5.6,2.49,0,4.52,2.24,4.74,5.09l6.16-5.73L90.45,62a29.53,29.53,0,0,0,3.73-3.84l2.12-2.82s8.72,31,2.41,38.52c-3.76,4.48-12.4.54-18.79-3.4l8.59,32.63H66.9l5.27-36.28L73,81"
      fill={colors.skin}
    />
    <path
      d="M87.67,42a9.74,9.74,0,0,0,3.08-4.61,11,11,0,0,0-1.14-9.3c-0.46-.71-4.88-6.37-1.88-5.74,7.25,1.53,12,8.18,13.71,15,0.81,3.25,1.34,7.21,0,10.38a20.75,20.75,0,0,1-3.17,5.13,18,18,0,0,0-1.81,2,32.36,32.36,0,0,1-2.3,3.3A29.53,29.53,0,0,1,90.45,62l-4.07,3.78-6.16,5.73C80,68.64,78,66.4,75.47,66.4c-2.64,0-4.79,2.51-4.79,5.6A5.57,5.57,0,0,0,74,77.3L73,81l-0.85,5.47C62,84.26,54.39,76,54.39,66.09q0-.4,0-0.81a20.66,20.66,0,0,1,9.65-16.22,24.34,24.34,0,0,1,9.66-3.61C78.58,44.73,84.06,44.89,87.67,42Z"
      fill={colors.hair}
    />
    <path
      d="M88.55,122.87H67c-10,6.06-18.61,11.89-26.39,18.77a74.94,74.94,0,0,0,72.09-1.83A181,181,0,0,0,88.55,122.87Z"
      fill={colors.shirt}
    />
  </svg>
);

export default AvatarSwirlHairCircle;

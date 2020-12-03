import React from "react";
import styled from "styled-components";

import { paddingSmall, colors } from "../constants/variables";

import AvatarBunHairRoundedSquare from "./avatars/AvatarBunHairRoundedSquare";
import AvatarLongHairRoundedSquare from "./avatars/AvatarLongHairRoundedSquare";
import AvatarShortHairRoundedSquare from "./avatars/AvatarShortHairRoundedSquare";
import AvatarSwirlHairRoundedSquare from "./avatars/AvatarSwirlHairRoundedSquare";

import AvatarBunHairSquare from "./avatars/AvatarBunHairSquare";
import AvatarLongHairSquare from "./avatars/AvatarLongHairSquare";
import AvatarShortHairSquare from "./avatars/AvatarShortHairSquare";
import AvatarSwirlHairSquare from "./avatars/AvatarSwirlHairSquare";

import AvatarBunHairCircle from "./avatars/AvatarBunHairCircle";
import AvatarLongHairCircle from "./avatars/AvatarLongHairCircle";
import AvatarShortHairCircle from "./avatars/AvatarShortHairCircle";
import AvatarSwirlHairCircle from "./avatars/AvatarSwirlHairCircle";

const avatars = {
  "rounded-square": {
    bun: AvatarBunHairRoundedSquare,
    long: AvatarLongHairRoundedSquare,
    short: AvatarShortHairRoundedSquare,
    swirl: AvatarSwirlHairRoundedSquare,
  },
  square: {
    bun: AvatarBunHairSquare,
    long: AvatarLongHairSquare,
    short: AvatarShortHairSquare,
    swirl: AvatarSwirlHairSquare,
  },
  circle: {
    bun: AvatarBunHairCircle,
    long: AvatarLongHairCircle,
    short: AvatarShortHairCircle,
    swirl: AvatarSwirlHairCircle,
  },
};

const Avatar = ({ colors, shape, hair }) => {
  const CurrentAvatar = avatars[shape][hair];

  const handleDownloadAvatar = (name) => {
    const svg = document.querySelector(`#avatar-${name}`);
    const data = svg.outerHTML;
    const blob = new Blob([data], { type: "image/svg+xml" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "avatar.svg";
    link.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <div>
      <CurrentAvatar colors={colors} shape={shape} hair={hair} />
      <div>
        <DownloadButton
          onClick={() => handleDownloadAvatar(`${hair}-${shape}`)}
        >
          Download
        </DownloadButton>
      </div>
    </div>
  );
};

const DownloadButton = styled.button`
  margin-top: ${paddingSmall};
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 8px 16px;
  border-radius: 8px;
  border: 1.5px solid ${colors.black};
  font-weight: 700;
  width: 150px;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

export default Avatar;

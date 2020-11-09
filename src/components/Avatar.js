import React from "react";

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
  return (
    <div>
      <CurrentAvatar colors={colors} />
    </div>
  );
};

export default Avatar;

export const colors = {
  stroke: "#000000",
  skin: "#F2E4C2",
  hair: "#FF7A50",
  bg: "#213793",
  shirt: "#5198C4",
  white: "#FFFFFF",
  black: "#000000",
  text: "#000000",
};

export const paddingSmall = "24px";
export const paddingMedium = "72px";
export const paddingLarge = "100px";

export const xMarginMobile = "32px";

export const contentWidth = "800";
export const contentWidthNarrow = "400px";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device_min = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const device = {
  mobile: `(max-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop})`,
};

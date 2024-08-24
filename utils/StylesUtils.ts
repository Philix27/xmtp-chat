import { Dimensions } from "react-native";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const AppUtils = {
  sizes: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    spacing: 20,
  },
  color: {
    primary: "#02BA17",
    secondary: "#0E7240",
    card: "#0B2941",
    bg: "#06121C",
    accent: "#0E7240",
    grey: "#6C757D",
    textHeadings: "#FFFFFF",
    textBody: "#B9B9B9",
    infoBg: "#E0E9F8",
    infoSide: "#FFC107",
    light: {
      text: "#000",
      background: "#fff",
      tint: tintColorLight,
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorLight,
    },
    dark: {
      text: "#fff",
      background: "#000",
      tint: tintColorDark,
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorDark,
    },
  },
};

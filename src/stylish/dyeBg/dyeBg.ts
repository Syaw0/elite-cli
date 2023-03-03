import backgroundColors, { BackgroundColors } from "../dyeBg/backgroundColors";
const attachBackgroundAnsi = (background: BackgroundColors) => {
  return `\x1b[${backgroundColors[background]}m`;
};

export default attachBackgroundAnsi;

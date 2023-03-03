import foregroundColors, { ForegroundColors } from "../dye/foregroundColors";
const attachForegroundAnsi = (foreground: ForegroundColors) => {
  return `\x1b[${foregroundColors[foreground]}m`;
};

export default attachForegroundAnsi;

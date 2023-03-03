import backgroundColors, { BackgroundColors } from "./backgroundColors";
import foregroundColors, { ForegroundColors } from "./foregroundColors";
const resetAnsi = "\x1b[0m";
const attachColorAnsi = (
  text: string,
  foreground: ForegroundColors,
  background: BackgroundColors
) => {
  const fo = `\x1b[${foregroundColors[foreground]}m`;
  const ba = `\x1b[${backgroundColors[background]}m`;
  return `${ba}${fo}${text}${resetAnsi}`;
};

export default attachColorAnsi;

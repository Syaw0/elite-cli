import foregroundColors from "./dye/foregroundColors";
import backgroundColors from "./dyeBg/backgroundColors";

declare global {
  type Config = {
    italic?: true;
    bold?: true;
    faint?: true;
    underline?: true;
    overline?: true;
    blink?: true;
    invert?: true;
    strike?: true;
    doubleUnderline?: true;
    dye?: ForegroundColors;
    dyeBg?: BackgroundColors;
  };
  type BackgroundColors = keyof typeof backgroundColors;
  type ForegroundColors = keyof typeof foregroundColors;
}

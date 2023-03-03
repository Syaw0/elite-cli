const foregroundColors = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  gray: 90,
  lightRed: 91,
  lightGreen: 92,
  lightYellow: 93,
  lightBlue: 94,
  lightMagenta: 95,
  lightCyan: 96,
  lightWhite: 97,
};

export default foregroundColors;
export type ForegroundColors = keyof typeof foregroundColors;

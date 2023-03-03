const backgroundColors = {
  black: 40,
  red: 41,
  green: 42,
  yellow: 43,
  blue: 44,
  magenta: 45,
  cyan: 46,
  white: 47,
  gray: 100,
  lightRed: 101,
  lightGreen: 102,
  lightYellow: 103,
  lightBlue: 104,
  lightMagenta: 105,
  lightCyan: 106,
  lightWhite: 107,
};

export default backgroundColors;
export type BackgroundColors = keyof typeof backgroundColors;

const config = {
  transform: {
    "^.+\\.ts?$": ["ts-jest"],
  },
  testRegex: "(/__tests__/|/test//.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  testEnvironment: "node",
};

export default config;

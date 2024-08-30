module.exports = {
    transform: {
      "^.+\\.(js|jsx)?$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  };
  
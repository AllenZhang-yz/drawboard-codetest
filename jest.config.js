module.exports = {
  jest: {
    setupFilesAfterEnv: ["jest-enzyme"],
    testEnvironment: "enzyme",
    testEnvironmentOptions: {
      enzymeAdapter: "react16"
    }
  }
};

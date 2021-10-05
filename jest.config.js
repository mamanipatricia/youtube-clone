const path = require("path");
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "@testing-library-/jest-dom/extend-expect",
    path.join(__dirname, "src/test/setup"),
  ],
  resetMocks: true,
  moduleDirectories: ["node_modules", "src"], // check src to be changed... in video3 simply test with react  testing library -> Assertions video
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-select-projects",
  ],
};

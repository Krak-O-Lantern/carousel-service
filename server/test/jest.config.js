const { resolve } = require('path');
const root = resolve(__dirname, '..');

module.exports = {
  roots: ['<rootDir>'],
  displayName: 'Server',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    "/node_modules/",
  ],
  testEnvironment: 'node',
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "node",
    "css",
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  verbose: true,
};

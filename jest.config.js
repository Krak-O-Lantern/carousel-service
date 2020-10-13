
module.exports = {
  displayName: 'Client',
  projects: ['<rootDir>', '<rootDir>/server/test/jest.config.js'],
  roots:['<rootDir>/client/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>client/src/tests/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ["<rootDir>client/src/setupTests.jsx"],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
     "/node_modules/"
   ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "node",
    "css",
  ],
  preset: undefined,
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
   verbose: true,
};
// , '<rootDir>/database/test/jest.config.js'
module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
};
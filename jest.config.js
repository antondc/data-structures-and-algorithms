module.exports = {
  preset: 'ts-jest',
  transform: {},
  testRegex: './src/*/.*test.(ts)$',
  setupFiles: [],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$': '<rootDir>/src/shared/tools/tests/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/shared/tools/tests/styleMock.ts',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

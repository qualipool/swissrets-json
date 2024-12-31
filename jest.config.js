// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  }
};

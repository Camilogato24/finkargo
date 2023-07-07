module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': 'babel-jest'
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    testMatch: ['<rootDir>/src/**/*.spec.(ts|tsx)'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  };
  
module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/test/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFiles: ['./debugMode.ts'],
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test'
      }
    ]
  ]
};

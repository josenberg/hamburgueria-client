module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

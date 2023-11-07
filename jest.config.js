module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '@tarojs': 'ts-jest',
  },
  testEnvironment: 'node',
  coverageDirectory: '.coverage',
  collectCoverageFrom: ['src/utils/**.ts'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
    // taro的bug，等taro修复后这里可以删除
    // https://github.com/NervJS/taro/pull/9762
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_TEMPLATE_CONTENT: true,
    ENABLE_CONTAINS: true,
    BUILD_ENV: 'prod',
  },
  // transformIgnorePatterns: ['node_modules/(?!(@tarojs))'],
}

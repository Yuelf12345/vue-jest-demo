module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    // 告诉 Jest 处理 `*.vue` 文件
    'vue'
  ],
  transform: {
    // 处理 js 文件以支持 ES6+ 语法
    '^.+\\.js$': 'babel-jest',
    // 使用 @vue/vue3-jest 来处理 *.vue 文件
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
   testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)', // 匹配.spec文件
    '**/__tests__/*.(js|jsx|ts|tsx)', // 匹配__tests__目录下的文件
    '**/*.test.(js|jsx|ts|tsx)' // 匹配.test文件
  ],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
  customExportConditions: ["node", "node-addons"],
  }
}

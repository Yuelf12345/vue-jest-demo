module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    // 告诉 Jest 处理 `*.vue` 文件
    'vue',
    'tsx'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    // 处理 js 文件以支持 ES6+ 语法
    '^.+\\.js$': 'babel-jest',
    // 使用 @vue/vue3-jest 来处理 *.vue 文件
    '.*\\.(vue)$': '@vue/vue3-jest',
     '^.+\\.tsx?$': [
      'ts-jest', 
      {
        babelConfig: {
          presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-typescript',
            ['@vue/babel-preset-jsx', {
              injectH: false // 关闭自动注入h函数
            }]
          ]
        }
      }
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)\\.tsx$': '<rootDir>/src/$1.tsx'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)', // 匹配.spec文件
    '**/__tests__/*.(js|jsx|ts|tsx)', // 匹配__tests__目录下的文件
    '**/?(*.)+(spec|test).+(ts|tsx|js)' // 确保包含 .ts 文件
  ],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
    extensionsToTreatAsEsm: ['.ts', '.tsx']
  }
}

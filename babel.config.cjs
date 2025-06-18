// babel.config.cjs
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    ['@vue/babel-preset-jsx', {
      compositionAPI: 'auto', // 自动处理组合式API
      injectH: false
    }]
  ]
};
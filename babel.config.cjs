// babel.config.cjs
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    ['@vue/babel-preset-jsx', {
      compositionAPI: true, // 针对 Vue 3 的 setup 语法
       injectH: false
    }]
  ]
};
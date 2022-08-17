const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  assetsDir: 'src',
  filenameHashing: false,
  productionSourceMap: false,
  transpileDependencies: true
})

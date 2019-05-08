var path = require('path');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'prettier.min.js',
    library: 'prettier',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [new CleanWebpackPlugin()]
});

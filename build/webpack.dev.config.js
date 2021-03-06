var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: './examples/main',
  output: {
    path: path.join(__dirname, '../examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../examples/index.html')
    })
  ],
  optimization: {
    // minimizer: [new OptimizeCssAssetsPlugin()]
    // runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          automaticNameDelimiter: '.',
          chunks: 'initial' // 只打包初始时依赖的第三方
        }
      }
    }
  }
});

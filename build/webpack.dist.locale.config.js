var path = require('path');
var entry = require('./locale');
module.exports = {
  mode: 'production',
  entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/locale'),
    publicPath: '/dist/locale/',
    filename: '[name].js',
    library: 'nui/locale',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

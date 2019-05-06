var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');

var webpackConfig = merge(webpackBaseConfig, {
  mode: 'development'
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;

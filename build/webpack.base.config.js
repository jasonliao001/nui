var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const markdownRender = require('markdown-it')();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
function wrap(render) {
  return function() {
    return render
      .apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: 'umd',
                  targets: {
                    browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                  }
                }
              ]
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')]
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, use: 'url-loader?limit=8192' },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true,
              preset: 'default',
              breaks: true,
              preventExtract: true,
              preprocess: function(MarkdownIt, source) {
                MarkdownIt.renderer.rules.table_open = function() {
                  return '<table class="table">';
                };
                MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
                return source;
              },
              use: [
                [
                  require('markdown-it-container'),
                  'demo',
                  {
                    validate: function(params) {
                      return params.trim().match(/^demo\s*(.*)$/);
                    },
                    render: function(tokens, idx) {
                      if (tokens[idx].nesting === 1) {
                        // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                        let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                        let description = demoInfo && demoInfo.length > 1 ? demoInfo[1] : '';
                        let descriptionHTML = description ? markdownRender.render(description) : '';
                        // 2.获取代码块内的html和js代码
                        let content = tokens[idx + 1].content;
                        // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                        return `<demo-block>
                      <div class="source" slot="source">${content}</div>
                      ${descriptionHTML}
                      <div class="highlight" slot="highlight">`;
                      } else {
                        return '</div></demo-block>\n';
                      }
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[name].css' : '[name].[chuncHash:8].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@d': resolve('examples/docs')
    }
  }
};

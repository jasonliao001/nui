var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const markdownRender = require('markdown-it')();
function resolve(dir) {
  return path.join(__dirname, '..', dir);
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
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
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
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@d': resolve('examples/docs')
    }
  }
};

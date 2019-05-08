## 快速上手

<h3 style="padding-top:10px"> 引入 Prettier </h3>

<p>一般在 webpack 入口页面 main.js 中如下配置：</p>

```script
import Vue from 'vue';
import Prettier from 'prettier-ui';
import 'prettier-ui/dist/styles/prettier.css';
Vue.use(Prettier)
```

<h3 > 按需加载 </h3>
<h5>第一步</h5>
<p>借助插件 babel-plugin-import 可以实现按需加载组件，在 .babelrc 中配置：</p>

```script
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "prettier-ui",
    "libraryDirectory": "src/components"
  }]]
}
```

<h5 >第二步</h5>

```script
import { Icon } from 'prettier-ui';
Vue.component('Icon', Icon);
```

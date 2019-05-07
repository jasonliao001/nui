# [Nui](https://jasonliao001.github.io/nui/)

> 9102 年了，还没有自己的 UI 组件库，要被时代所抛弃。

## 安装

### npm 安装

```
npm i prettier-ui -S
```

### CDN

```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/prettier-ui/dist/nui-css/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/nui-css/dist/nui.js"></script>
```

## 快速开始

### 完整引入

```
import Vue from 'vue'
import nui from 'prettier-ui';
import 'prettier-ui/dist/styles/nui.css';
Vue.use(nui)
```

### 按需引用

第一步

```
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "nui",
    "libraryDirectory": "src/components"
  }]]
}
```

第二步

```
import { Button, Table } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
```

## 项目规划

### 已完成

- [x] 打包工具使用 webpack 4.30.0

- [x] 使用 markdown-it 实现文档编写

- [x] 使用 eslint 代码检测

- [x] 使用 Glup4 打包样式文件

- [x] 主题定制

- [x] 单元测试 karma+mocha+chai

- [x] npm 发布 包名为 prettier-ui

- [x] 使用 make 自动化构建

- [x] gh-pages 上线文档

- [x] i18 国际化

### 待完成

- [ ] 组件

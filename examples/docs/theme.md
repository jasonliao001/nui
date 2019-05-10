## 定制主题

> 利用样式的覆盖即能完成主题的定制

### 变量覆盖（推荐）

#### 第一步

```script
// mkdir your-theme-less/index.less
@import '~prettier-ui/src/styles/index.less';
// cover styles, such as:
@primary-color: your-primary-color;
```

#### 第二步

```script
import Vue from 'vue';
import prettier from 'prettier-ui';
import '../your-theme-less/index.less';
Vue.use(prettier);
```

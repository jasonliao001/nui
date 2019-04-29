# h1

---

## h2

##### h5

### 基础用法

基础内容用法
::: demo

```html
<template>
  <Message></Message>
</template>
<script>
  export default {
    data() {
      return {
        value3: '123'
      };
    }
  };
</script>
```

:::

### API

|    参数     |       说明       |  类型  |  可选值   | 默认值 |
| :---------: | :--------------: | :----: | :-------: | :----: |
|   minLine   |     最小行高     | Number |           |  1 ·   |
|   maxLine   |     最大行高     | Number |           |   3    |
| placeholder |  文本框提示文字  | String |           |   ''   |
|    mode     |   字数统计方式   | String | 'ZN','CC' |  'ZN'  |
|  maxLength  | 输入文字最大长度 | Number |           |  400   |

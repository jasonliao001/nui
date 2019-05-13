## Grid 格栅

> 借鉴[BootStarp](https://github.com/twbs/bootstrap)的格栅系统构建，采用基础的 24 分栏，能够快速的布局。还可以利用[layoutit](https://www.layoutit.com/build)来快速布局。

#### 基础用法

::: demo

```html
<template>
  <Row>
    <Column span="12">col-12</Column>
    <Column span="12">col-12</Column>
  </Row>
  <br />
  <Row>
    <Column span="8">col-8</Column>
    <Column span="8">col-8</Column>
    <Column span="8">col-8</Column>
  </Row>
  <br />
  <Row>
    <Column span="6">col-6</Column>
    <Column span="6">col-6</Column>
    <Column span="6">col-6</Column>
    <Column span="6">col-6</Column>
  </Row>
</template>
<script>
  export default {};
</script>
```

:::

#### Column 间隔

::: demo

```html
<template>
  <div class="gutter">
    <Row :gutter="16">
      <Column span="6">
        <div>col-6</div>
      </Column>
      <Column span="6">
        <div>col-6</div>
      </Column>
      <Column span="6">
        <div>col-6</div>
      </Column>
      <Column span="6">
        <div>col-6</div>
      </Column>
    </Row>
  </div>
</template>
<script>
  export default {};
</script>
```

:::

#### 栅格顺序(Flex)

::: demo

```html
<template>
  <Row type="flex">
    <Column span="6" order="4">1 | order-4</Column>
    <Column span="6" order="3">2 | order-3</Column>
    <Column span="6" order="2">3 | order-2</Column>
    <Column span="6" order="1">4 | order-1</Column>
  </Row>
</template>
<script>
  export default {};
</script>
```

:::

#### 栅格顺序

::: demo

```html
<template>
  <Row>
    <Column span="18" push="6">col-18 | push-6</Column>
    <Column span="6" pull="18">col-6 | pull-18</Column>
  </Row>
</template>
<script>
  export default {};
</script>
```

:::

#### 左右偏移

::: demo

```html
<template>
  <Row>
    <Column span="8">col-8</Column>
    <Column span="8" offset="8">col-8 | offset-8</Column>
  </Row>
  <br />
  <Row>
    <Column span="6" offset="8">col-6 | offset-8</Column>
    <Column span="6" offset="4">col-6 | offset-4</Column>
  </Row>
  <br />
  <Row>
    <Column span="12" offset="8">col-12 | offset-8</Column>
  </Row>
</template>
<script>
  export default {};
</script>
```

:::

#### 响应式布局

::: demo

```html
<template>
    <Row>
        <Column :xs="2" :sm="4" :md="6" :lg="8">Col</Column>
        <Column :xs="20" :sm="16" :md="12" :lg="8">Col</Column>
        <Column :xs="2" :sm="4" :md="6" :lg="8">Col</Columns>
    </Row>
</template>
<script>
    export default {

    }
</script>

```

:::

#### 响应式布局（混合属性）

::: demo

```html
<template>
  <Row>
    <Column :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Column>
    <Column :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Column>
    <Column :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Column>
  </Row>
</template>
<script>
  export default {};
</script>
```

:::

#### Flex 布局(水平排列)

::: demo

```html
<template>
<Row type="flex" justify="end" >
    <Column span="4">col-4</Column>
    <Column span="4">col-4</Column>
    <Column span="4">col-4</Column>
    <Column span="4">col-4</Columns>
</Row>
</template>
    <script>
  export default {};
</script>
```

:::

#### Flex 布局 (垂直对齐)

::: demo

```html
<template>
<Row type="flex" justify="end" align="middle" >
    <Column span="4" style="height: 80px">col-4</Column>
    <Column span="4" style="height: 20px">col-4</Column>
    <Column span="4" style="height: 100px">col-4</Column>
    <Column span="4" style="height: 50px">col-4</Columns>
</Row>
</template>
    <script>
  export default {};
</script>
```

:::

### API

##### Row props

|    属性    |                    说明                     |  类型  | 默认值 |
| :--------: | :-----------------------------------------: | :----: | :----: |
|   gutter   |         栅格间距，单位 px，左右平分         | Number |   0    |
|    type    |           可以 flex 布局，兼容性            | String |   /    |
|   algin    |   属性同 flex 中 align-item 属性值可选择    | String |   /    |
|  justify   | 属性同 flex 中 justify-content 属性值可选择 | String |   /    |
| class-name |                   自定义                    | String |   /    |

##### Column props

|    属性    |                               说明                               |      类型       | 默认值 |
| :--------: | :--------------------------------------------------------------: | :-------------: | :----: |
|    span    | 格的占位格数，可选值为 0~24 的整数，为 0 时，相当于 display:none | Number / String |   /    |
|   order    |                         flex 布局，可用                          | Number / String |   /    |
|    push    |                         栅格向右移动格数                         | Number / String |   /    |
|    pull    |                         栅格向左移动格数                         | Number / String |   /    |
|   offset   |              栅格左侧的间隔格数，间隔内不可以有栅格              | Number / String |   /    |
| class-name |                              自定义                              | Number / String |   /    |
|     xs     |                      超小屏幕 手机 (<768px)                      | Number / String |   /    |
|     sm     |                       小屏幕 平板 (≥768px)                       | Number / String |   /    |
|     md     |                   中等屏幕 桌面显示器 (≥992px)                   | Number / String |   /    |
|     lg     |                  大屏幕 大桌面显示器 (≥1200px)                   | Number / String |   /    |

## Layout 布局

> 赋能布局,快速解决布局问题。

### Flex 实现

#### 基础布局

::: demo

```html
<template>
  <Layout type="flex">
    <Lheader>Header</Lheader>
    <Lcontent>Content</Lcontent>
    <Lfooter>Footer</Lfooter>
  </Layout>
</template>
```

:::

### 兼容解决方案

<p>由于Flex方案布局只是适应现代浏览器，以下为部分解决方案</p>

#### 两栏布局

::: demo

```html
<!-- 左列定宽,右列自适应 -->
<!-- 实现方案1 -->
<div class="gutter">
  <div id="left-1">左列定宽</div>
  <div id="right-1">右列自适应</div>
</div>
<!-- 实现方案2 -->
<div class="gutter">
  <div id="left-2">左列定宽</div>
  <div id="right-2">右列自适应</div>
</div>
<!-- 实现方案3 -->
<div id="parent-3" class="gutter">
  <div id="left-3">左列定宽</div>
  <div id="right-3">右列自适应</div>
</div>
<!-- 实现方案4 -->
<div id="parent-4" class="gutter" style="height: 50px;">
  <div id="left-4">左列定宽</div>
  <div id="right-4">右列自适应</div>
</div>

<style>
  .gutter {
    margin-bottom: 10px;
  }
  #left-1 {
    background-color: #c6c6c9;
    float: left;
    width: 100px;
    height: 50px;
  }
  #right-1 {
    background-color: #dcdddf;
    height: 50px;
    margin-left: 100px; /*设置间隔，大于等于#left的宽度*/
  }
  #left-2 {
    background-color: #c6c6c9;
    float: left;
    width: 100px;
    height: 50px;
  }
  #right-2 {
    background-color: #dcdddf;
    height: 50px;
    overflow: hidden; /*触发bfc达到自适应*/
  }
  #parent-3 {
    width: 100%;
    display: table;
  }
  #left-3 {
    width: 100px;
    height: 50px;
    background-color: #c6c6c9;
  }
  #right-3 {
    background-color: #dcdddf;
  }
  /*利用单元格自动分配宽度*/
  #left-3,
  #right-3 {
    display: table-cell;
  }
  #parent-4 {
    position: relative;
  } /*父相*/
  #left-4 {
    position: absolute; /*子绝*/
    top: 0;
    left: 0;
    background-color: #c6c6c9;
    width: 100px;
    height: 50px;
  }
  #right-4 {
    position: absolute; /*子绝*/
    top: 0;
    left: 100px; /*值大于等于#left的宽度*/
    right: 0;
    background-color: #dcdddf;
    height: 50px;
  }
</style>
```

:::

#### 三栏布局

:::demo

```html
<!-- 方案1 -->
<div id="parent-5" class="gutter">
  <div id="left-5">左列定宽</div>
  <div id="center-5">中间定宽</div>
  <div id="right-5">右列自适应</div>
</div>
<!-- 方案2同两列布局的方案2 -->
<!-- 方案3同两列布局的方案3 -->
<!-- 双飞翼布局方法 -->

<div class="gutter">
  <div id="header-6">双飞翼布局</div>
  <!--中间栏需要放在前面-->
  <div id="parent-6">
    <div id="center-6">
      <div id="center-inbox-6">
        中间自适应
        <hr />
      </div>
      <!--方便观察原理-->
    </div>
    <div id="left-6">左列定宽</div>
    <div id="right-6">右列定宽</div>
  </div>
  <div id="footer-6">双飞翼布局</div>
</div>
<!-- 圣杯布局 -->
<div id="header-7">圣杯布局</div>
<div id="parent-7">
  <!--#center需要放在前面-->
  <div id="center-7">
    中间自适应
    <hr />
  </div>
  <div id="left-7">左列定宽</div>
  <div id="right-7">右列定宽</div>
</div>
<div id="footer-7">圣杯布局</div>
<style>
  #parent-5 {
    min-width: 310px;
  } /*100+10+200,防止宽度不够,子元素换行*/
  #left-5 {
    margin-right: 10px; /*#left和#center间隔*/
    float: left;
    width: 100px;
    height: 50px;
    background-color: #c6c6c9;
  }
  #center-5 {
    float: left;
    width: 200px;
    height: 50px;
    background-color: #dcdddf;
  }
  #right-5 {
    margin-left: 320px; /*等于#left和#center的宽度之和加上间隔,多出来的就是#right和#center的间隔*/
    height: 50px;
    background-color: #c6c6c9;
  }
  /*  */
  #header-6 {
    height: 60px;
    text-align: center;
    background-color: #ccc;
  }
  #left-6 {
    float: left;
    width: 100px;
    height: 100px;
    margin-left: -100%; /*调整#left的位置,值等于自身宽度*/
    background-color: #c6c6c9;
    /* background-color: #f00; */
    opacity: 0.5;
  }
  #center-6 {
    height: 100px;
    float: left;
    width: 100%;
    background-color: #dcdddf;
  }
  #center-inbox-6 {
    height: 100px;
    border: 1px solid #000;
    margin: 0 220px 0 120px; /*关键!!!左右边界等于左右盒子的宽度,多出来的为盒子间隔*/
  }
  #right-6 {
    float: left;
    width: 200px;
    height: 100px;
    margin-left: -200px; /*使right到指定的位置,值等于自身宽度*/
    background-color: #c6c6c9;
    opacity: 0.5;
  }
  #footer-6 {
    clear: both; /*注意清除浮动!!*/
    height: 60px;
    text-align: center;
    background-color: #ccc;
  }
  /*  */
  #header-7 {
    height: 60px;
    text-align: center;
    background-color: #ccc;
  }
  #parent-7 {
    height: 100px;
    padding: 0 215px 0 115px; /*为了使#center摆正,左右padding分别等于左右盒子的宽,可以结合左右盒子相对定位的left调整间距*/
  }
  #left-7 {
    margin-left: -100%; /*使#left上去一行*/
    position: relative;
    left: -115px; /*相对定位调整#left的位置,正值大于或等于自身宽度*/
    float: left;
    width: 100px;
    height: 100px;
    background-color: #c6c6c9;
    opacity: 0.5;
  }
  #center-7 {
    float: left;
    width: 100%; /*由于#parent的padding,达到自适应的目的*/
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #dcdddf;
    background-color: #dcdddf;
  }
  #right-7 {
    position: relative;
    left: 215px; /*相对定位调整#right的位置,大于或等于自身宽度*/
    width: 200px;
    height: 100px;
    margin-left: -200px; /*使#right上去一行*/
    float: left;
    background-color: #c6c6c9;
    opacity: 0.5;
  }
  #footer-7 {
    text-align: center;
    height: 60px;
    background-color: #ccc;
  }
</style>
```

:::

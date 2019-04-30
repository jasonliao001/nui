<template>
    <div class="demo-block">
        <div class="demo-block-source">
            <slot name="source"></slot>
        </div>
        <span class="demo-block-code-icon" v-if="!$slots.default" @click="showCode=!showCode">
            <i class="ion-icon ion-ios-code-working"></i>
            <span v-if="!showCode">查看代码</span>
            <span v-else>收起代码</span>
        </span>
        <div class="demo-block-code" v-show="showCode">
            <slot name="highlight"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "DemoBlock",
    data() {
        return {
            showCode: false
        };
    }
};
</script>
<style lang='less'>
.demo-block {
    border: 1px solid #ebedf0;
    border-radius: 2px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 16px 0 16px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    .demo-block-code-icon {
        width: 100%;
        text-align: center;
        display: inline-block;
        color: #c5d9e8;
        font-size: 12px;
        padding: 10px 0;
        background-color: #fafbfc;
        cursor: pointer;
    }
    .demo-block-source {
        border-bottom: 1px solid #ebedf0;
        padding: 20px 24px 20px;
        color: #444;
        position: relative;
        margin-bottom: -1px;
    }
    .demo-block-meta {
    }

    .demo-block-code {
        pre {
            font-size: 0;
            code {
                padding: 20px;
                border: none;
                display: block;
                font-size: 14px;
            }
        }
    }
}

section {
    .table {
        width: 100%;
        background-color: #fff;
        color: #5e6d82;
        font-size: 14px;
        border-collapse: collapse;
        overflow: auto;
        margin-top: 20px;
        margin-bottom: 50px;
        th,
        td {
            border-top: 1px solid #f3f7fa;
            border-bottom: 1px solid #f3f7fa;
            padding: 10px 8px;
        }
        th {
            background-color: #fafbfc;
        }
    }
}
</style>
<template>
    <div class="demo-block">
        <div class="demo-block-source">
            <slot name="source"></slot>
        </div>
        <span class="demo-block-code-icon" v-if="!showCode" @click="showCode=!showCode">
            <i class="ion-icon ion-ios-arrow-dropdown-circle ion-ios-code-working-extra"></i>
            <!-- <span v-if="!showCode">Show Code</span> -->
            <!-- <span v-else>收起代码</span> -->
        </span>

        <div class="demo-block-code" v-show="showCode">
            <slot name="highlight"></slot>
        </div>
        <span class="demo-block-code-icon" v-if="showCode" @click="showCode=!showCode">
            <i class="ion-icon ion-ios-arrow-dropup-circle ion-ios-code-working-extra"></i>
            <!-- <span v-else>收起代码</span> -->
        </span>
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
@import "../../src/styles/custom.less";
.demo-block {
    border: 1px solid #ebedf0;
    border-radius: 4px;
    position: relative;
    margin: 16px 0 16px;
    transition: all 0.2s;
    &:hover {
        box-shadow: @shadow-down;
    }
    .demo-block-code-icon {
        width: 100%;
        text-align: center;
        display: inline-block;
        color: @Secondary-color;
        // font-size: 12px;
        padding: 4px 0;
        background-color: @Light-color;
        cursor: pointer;
        .ion-ios-code-working-extra {
            font-size: 14px;
        }
    }
    .demo-block-source {
        border-bottom: 1px dashed #ebedf0;
        padding: 10px 20px;
        color: #444;
        position: relative;
        margin-bottom: -1px;
    }
    .demo-block-meta {
    }

    .demo-block-code {
        margin-bottom: -10px;
    }
}
</style>

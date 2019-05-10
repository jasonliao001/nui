<template>
    <div class="demo-block">
        <div class="demo-block-source">
            <slot name="source"></slot>
        </div>
        <span class="demo-block-code-icon" v-if="!showCode" @click="showCode=!showCode">
            <i class="ion-icon ion-ios-arrow-dropdown-circle ion-ios-code-working-extra"></i>
        </span>
        <div class="demo-block-code" v-show="showCode">
            <i
                :class="['ion-icon','ion-ios-copy-extra','copy',{'ion-ios-copy':!copied,'ion-ios-checkmark-circle':copied,'success-cls':copied}]"
                @click="clip"
            ></i>
            <div ref="code">
                <slot name="highlight"></slot>
            </div>
        </div>
        <span class="demo-block-code-icon" v-if="showCode" @click="showCode=!showCode">
            <i class="ion-icon ion-ios-arrow-dropup-circle ion-ios-code-working-extra"></i>
        </span>
    </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
    name: "DemoBlock",
    data() {
        return {
            showCode: false,
            code: "",
            copied: false
        };
    },
    mounted() {},
    methods: {
        clip() {
            const code = this.$refs.code.textContent;
            const clipboard = new Clipboard(".copy", {
                text() {
                    return code;
                }
            });

            clipboard.on("success", e => {
                e.clearSelection();
                clipboard.destroy();
                this.copied = true;
                setTimeout(() => {
                    this.copied = false;
                }, 2000);
            });
        }
    }
};
</script>
<style lang='less'>
@import "../../src/styles/custom.less";

.demo-block {
    border: 1px solid shade(@Light-color, 5%);
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

<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
import { oneOf } from "../../utils/assist";
const prefixCls = "pre-layout";
export default {
    name: "Layout",
    props: {
        type: {
            validator(value) {
                return oneOf(value, ["flex", "float", "position", "table"]);
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        wrapClasses() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${this.type}`]: !!this.type
                }
            ];
        }
    }
};
</script>

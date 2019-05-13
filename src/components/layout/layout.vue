<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = "pre-layout";
export default {
    name: "Layout",
    data() {
        return {};
    },
    computed: {
        wrapClasses() {
            return [`${prefixCls}`];
        }
    }
};
</script>

<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = "pre-layout";
export default {
    name: "Footer",
    computed: {
        wrapClasses() {
            return [`${prefixCls}-header`];
        }
    }
};
</script>

<template>
    <i :class="classes"></i>
</template>
<script>
const prefixCls = "ion-icon";
export default {
    name: "Icon",
    props: {
        type: String,
        custom: {
            type: String,
            default: ""
        }
    },
    computed: {
        classes() {
            return this.custom
                ? this.custom
                : `${prefixCls} ${prefixCls}-${this.type}`;
        }
    }
};
</script>

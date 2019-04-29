<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import demoBlock from "./components/demoBlock";
export default {
    components: {
        demoBlock
    },
    mounted() {
        console.log("sd");
    }
};
</script>
<style lang="scss" scoped>
div {
    color: red;
}
</style>
<style lang="less" scoped>
div {
    color: #ddd;
}
</style>
<style>
div {
    color: blue;
}
</style>



<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import "highlight.js/styles/atom-one-dark.css";
import demoBlock from "./components/demoBlock";
export default {
    components: {
        demoBlock
    }
};
</script>
<style lang="scss" scoped>
div {
    // color: red;
    // background-color: #ddd;
}
</style>




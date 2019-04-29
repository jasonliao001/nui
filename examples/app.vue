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
.ion-icon {
    display: inline-block;
    font-family: Ionicons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: middle;
    color: red;
}
</style>



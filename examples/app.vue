<template>
    <div id="app">
        <main-header></main-header>
        <template v-if="$route.name === 'index'">
            <main-body></main-body>
        </template>
        <div class="main-container" v-else>
            <side-nav></side-nav>
            <div class="markdown-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import sideNav from "./components/sideNav";
import mainHeader from "./components/header";
import mainBody from "./pages/index";
export default {
    components: {
        sideNav,
        mainHeader,
        mainBody
    }
};
</script>
<style lang="less" scoped>
.main-container {
    display: flex;
    padding: 20px;
    border-top: 1px solid #989aa2;
    .markdown-content {
        flex: 1;
        padding: 0 20px;
    }
}
</style>







<style type="text/less" lang="less">
.page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all 0.3s;
    z-index: 100;
    .header-container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 80px;
        justify-content: space-between;
        img {
            display: block;
            width: 80px;
            height: 80px;
            background-color: #fff;
        }
    }
}
</style>
<template>
    <header class="page-header">
        <div class="header-container">
            <router-link :to="{name: 'home'}">
                <img src width="100" alt="logo">
            </router-link>
            <router-link :to="{name: 'home'}">组件</router-link>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>
<template>
    <div class="header">
        <div class="header-container">
            <h1 class="logo">
                <router-link to="/">
                    <i class="ion-icon ion-ios-airplane"></i>&nbsp;Prettier
                </router-link>
            </h1>
            <ul class="header-nav">
                <li class="components">
                    <router-link to="/intro">
                        <span>组件</span>
                    </router-link>
                </li>
                <li class="page-header-item">
                    <a
                        href="https://github.com/jasonliao001/prettier-ui"
                        class="header-item-github"
                        target="_blank"
                    >
                        <i class="ion-icon ion-logo-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang="less">
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    .log {
        .ion-ios-cafe {
            vertical-align: initial;
        }
    }
    .header-nav {
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .components {
            margin-right: 20px;
        }
        .ion-icon {
            font-size: 32px;
        }
    }
}
</style>

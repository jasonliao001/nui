<template>
    <div class="side-nav">
        <ul>
            <li class="nav-item" v-for="item in data">
                <a
                    href="javascript:void(0)"
                    v-if="!item.path"
                    @click="handleTitleClick(item)"
                >{{ item.name }}</a>
                <router-link
                    v-else
                    active-class="active"
                    :to="base + item.path"
                    exact
                    v-text="item.title || item.name"
                />
                <ul class="pure-menu-list sub-nav" v-if="item.children">
                    <li class="nav-item" v-for="navItem in item.children">
                        <router-link
                            active-class="active"
                            :to="base + navItem.path"
                            v-text="navItem.title || navItem.name"
                        />
                    </li>
                </ul>
                <template v-if="item.groups">
                    <div class="nav-group" v-for="group in item.groups">
                        <div class="nav-group-title">{{ group.groupName }}</div>
                        <ul class="pure-menu-list">
                            <template v-for="navItem in group.list">
                                <li class="nav-item" v-if="!navItem.disabled">
                                    <router-link
                                        active-class="active"
                                        :to="base + navItem.path"
                                        v-text="navItem.title"
                                    />
                                </li>
                            </template>
                        </ul>
                    </div>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
import navList from "../nav.config.js";
export default {
    props: {
        base: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            data: navList
        };
    },
    methods: {
        handleTitleClick(item) {
            const firstGroup = item.groups && item.groups[0];
            if (firstGroup && firstGroup.list && firstGroup.list.length !== 0) {
                return this.$router.replace(
                    this.base + firstGroup.list[0].path
                );
            }
        }
    }
};
</script>

<style lang="less" scoped>
.side-nav {
    flex: 0 0 250px;
    border-right: 1px solid #989aa2;
    .nav-item {
        a {
            font-size: 16px;
            line-height: 40px;
            height: 40px;
            margin: 0;
            padding: 0;
            display: block;
            position: relative;
            transition: all 0.3s;
            padding: 0 20px;
            &.active {
                background-color: #f4f5f8;
                border-right: 4px solid #3880ff;
                color: #3880ff;
            }
        }
        .nav-item {
            a {
                display: block;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                padding-left: 44px;
            }
        }
    }
    .nav-group-title {
        font-size: 12px;
        color: #989aa2;
        padding-left: 28px;
        line-height: 26px;
        margin-top: 10px;
    }
}
</style>

<template>
    <div class="main">
        <span>Simple UI Framework</span>
    </div>
</template>
<style lang="less" scoped>
.main {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
span {
    display: inline-block;
    width: 19ch;
    font: bold 400% Consolas, Monaco, monospace;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
    animation: typing 3s steps(19), caret 0.5s steps(1) infinite;
}
@keyframes typing {
    from {
        width: 0;
    }
}
@keyframes caret {
    50% {
        border-right-color: currentColor;
    }
}
</style>

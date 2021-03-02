<template>
    <div>
        <!-- 由于顶部文字是不相同的，所以使用父传子 -->
        <div class="LoginTop">
            <div></div>
            <!-- 在标签中使用父传子属性 -->
            <div>{{middleTop}}</div>
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginTop',
    data() {
        return {
            
        }
    },
    props: {
        // 可以使用对象书写方式，也可以使用数组书写方式
        middleTop: {
            type: String,
        }
    }
}
</script>
<style lang="scss">
.LoginTop{
    height: 12vw;
    background-color: white;
    display: flex;
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.267vw;
    }
}
</style>
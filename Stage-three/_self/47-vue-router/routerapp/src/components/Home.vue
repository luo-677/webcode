<template>
    <div>
        <p>我是首页</p>
        <!-- 路径都要写成绝对路径 -->
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/msg">消息</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Home',
}
</script>
<style lang="">
    
</style>
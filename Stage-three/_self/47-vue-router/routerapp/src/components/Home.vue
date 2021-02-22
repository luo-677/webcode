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
    data() {
        return {
            path: '/home/news',
        }
    },
    activated() {
        this.$router.push(this.path).catch(err=>err);
    },
    beforeRouteLeave (to, from, next) {
        this.path = this.$route.path;
        console.log(this.$route)
        next();
    }
}
</script>
<style lang="">
    
</style>
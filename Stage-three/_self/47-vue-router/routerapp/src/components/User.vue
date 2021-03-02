<template>
    <div>
        <p>我是User</p>
        <p>{{getId}}</p>
    </div>
</template>
<script>
export default {
    name: 'User',
    computed: {
        getId(){
            // $route 指的是当前活跃的那个路由
            return this.$route.params.userId;
        }
    },
    beforeRouteLeave (to, from, next) {
        console.log("组件守卫");
        // 要去的下一个组件
        console.log(to);
        // 当前组件
        console.log(from);
        next();
    },
    // 下面俩只在keep-alive存在的情况下才生效
    activated() {
        console.log("activated");
    },
    deactivated() {
        console.log("deactivated");
    },
    
    created() {
        console.log("created");
    },
    destroyed() {
        console.log("destroyed");
    },
}
</script>
<style lang="">
    
</style>
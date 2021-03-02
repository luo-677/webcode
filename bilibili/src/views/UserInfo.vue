<template>
    <div class="userinfo">
        <nav-bar />
        <img src="../assets/bannerTop_new.png" alt="" class="backimg">
        <user-detail :userinfo="model" v-if="dataFlag" />
    </div>
</template>
<script>
import NavBar from '../views/NavBar'
import UserDetail from '../components/userComponent/UserDetail'
export default {
    name: 'UserInfo',
    data() {
        return {
            model:{},
            dataFlag: false,
        }
    },
    components: {
        NavBar,
        UserDetail,
    },
    methods: {
        async userInfoData(){
            // if(localStorage.getItem('id') && localStorage.getItem('token')){
                const res = await this.$http.get('/user/' + localStorage.getItem('id'));
                console.log(res);
                this.model = res;
                this.dataFlag = true;
            // }else{
            //     this.$router.push('/login');
            // }
        }
    },
    created() {
        console.log(11111);
        this.userInfoData();
    },
}
</script>
<style lang="scss">
.userinfo{
    .backimg{
        height: 24vw;
        width: 100%;
        vertical-align: top;
    }
}
</style>
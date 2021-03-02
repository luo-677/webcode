<template>
    <div>
        <!-- 当属性值为固定字符串时，不需要进行数据绑定 -->
        <!-- <login-top middleTop="注册bilibili"></login-top> -->
        <login-top :middleTop="topTitle">
            <div slot="right" @click="$router.push('/register')" style="font-size: 3.467vw">切换到注册</div>
        </login-top>

        <login-text label="帐号"
         placeholder="请输入帐号"
         :rule="rule"
         @inputChange="res => person.username=res"
         class="username"></login-text>

        <login-text label="密码"
         type="password"
         placeholder="请输入密码"
         :rule="rule"
         @inputChange="res => person.password=res"></login-text>

         <login-btn btnname="登录" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>
<script>
import LoginTop from '../components/common/LoginTop'
import LoginText from '../components/common/LoginText'
import LoginBtn from '../components/common/LoginBtn'
export default {
    name: 'Register',
    data(){
        return {
            person: {
                username: '',
                password: '',
            },
            // 定义好要传给子组件的数据
            topTitle: '登录bilibili',
            rule: /^.{6,16}$/,
        }
    },
    methods: {
        async registerSubmit(){
            // core-js 版本问题，脚手架的版本比较高，所以要用高版本的 core-js@3
            if(this.person.username && this.person.password){
                const res = await this.$http.post('/login',this.person);
                this.$msg.fail(res.data.msg);
                if(res.data.code === 200){
                    console.log(res);
                    localStorage.setItem('id',res.data.id);
                    localStorage.setItem('token',res.data.token);
                    setTimeout(()=>{
                        this.$router.push('/userinfo');
                    },1000);
                }
                // this.$router.push('/login');
            }else{
                this.$msg.fail('注册信息格式不正确');
            }
        }
    },
    components: {
        LoginTop,
        LoginText,
        LoginBtn
    }
}
</script>
<style lang="scss">
.username{
    margin: 4vw 0 4vw 0;
}
</style>
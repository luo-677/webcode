<template>
    <div class="btnparent" @click="registerClick">
        <div class="loginbtn">{{btnname}}</div>
    </div>
</template>

<script>
export default {
    name: 'LoginBtn',
    props: {
        btnname: {
            type: String,
        }
    },
    methods: {
        registerClick(){
            this.$emit('registerSubmit');
        }
    },
}
</script>

<style lang="scss">
.btnparent{
    padding: 15px 10px;
}
.loginbtn{
    height: 12vw;
    background-color: #ff9db5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6vw;
    font-size: 4.267vw;
}
</style>
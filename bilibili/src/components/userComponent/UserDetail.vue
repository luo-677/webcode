<template>
<div class="userall">
    <div class="userdetails">
        <div class="userimg">
            <!-- 有头像数据就渲染头像，没有就渲染默认数据 -->
            <img :src="userinfo.data[0].user_img" alt="" v-if="userinfo.data[0].user_img">
            <img src="../../assets/head.png" alt="" v-else>
        </div>
        <div class="user_edit">
            <div>
                <p>
                    <span>999</span>
                    <span class="user_text">粉丝</span>
                </p>
                <p>
                    <span>0</span>
                    <span class="user_text">关注</span>
                </p>
                <p>
                    <span>999</span>
                    <span class="user_text">获赞</span>
                </p>
            </div>
            <div>
                <div class="userEditBtn">编辑资料</div>
            </div>
        </div>
    </div>
    <h2 class="username">{{userinfo.data[0].name}}</h2>
    <div class="userins">
        <!-- 通过数据判断是否显示默认数据 -->
        <span v-if="userinfo.data[0].user_desc">{{userinfo.data[0].user_desc}}</span>
        <span v-else>这个人很牛逼，不屑于写介绍</span>
        <span @click="changeFlag">{{idFlag?'收起':'展开'}}</span>
    </div>
    <div class="userId" v-show="idFlag"><span>{{`uid:${userinfo.data[0].id}`}}</span></div>
</div>
    
</template>
<script>
export default {
    name: 'UserDetail',
    data() {
        return {
            idFlag: false,
        }
    },
    props: {
        userinfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        changeFlag(){
            this.idFlag = !this.idFlag;
        }
    },

}
</script>
<style lang="scss">
.userall{
    padding: 0 12px 15px;
    background-color: white;
    .userdetails{
        display: flex;
        .userimg{
            margin-right: 40px;
            img{
                width: 85px;
                height: 85px;
                border-radius: 50%;
                vertical-align: top;
                position: relative;
                top: -10px;
            }
        }
        .user_edit{
            flex: 1;
            >div:nth-of-type(1){
                padding: 10px 0;
                display: flex;
                p{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 13px;
                    .user_text{
                        color: #aaa;
                    }
                }
                p:nth-child(1),p:nth-child(2){
                    border-right: 1px solid #aaa;
                }
            }
            .userEditBtn{
                text-align: center;
                border: 1px solid #fb7a9f;
                border-radius: 5px;
                color: #fb7a9f;
                padding: 5px 10px;
                font-size: 13px;
            }
        }
    }
    .username{
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
    }
    .userins{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        >span:nth-child(1){
            color: #aaa;
        }
        >span:nth-child(2){
            color: #1389bf;
        }
    }
    .userId{
        span{
            font-size: 12px;
            background-color: #f4f4f4;
        }
    }
}

</style>
<template>
    <div class="navbar">
        <div class="logobox">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="middle">
            <p>
                <van-icon name="search" class="middle-icon"/>
                请输入内容
            </p>
        </div>
        <div class="right">
            <img src="../assets/head.png" alt="">
            <p>下载APP</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>
<style lang="scss">
.navbar{
    display: flex;
    height: 12vw;
    background-color: white;
    .logobox{
        width: 29.333vw;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 90%;
        }
    }
    .middle{
        flex: 1;
        display: flex;
        align-items: center;
        margin: 0 1.333vw;
        p{
            background-color: #f4f4f4;
            height: 6.933vw;
            width: 100%;
            border-radius: 2.667vw;
            position: relative;
            color: #aaa;
            line-height: 7.467vw;
            font-size: 3.467vw;
            padding-left: 8vw;
            .middle-icon{
                position: absolute;
                top: 50%;
                left: 2.667vw;
                // 上下居中
                transform: translate(0,-45%);
                color: #aaa;
            }
        }
    }
    .right{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 6.4vw;
            height: 6.4vw;
            border-radius: 50%;
        }
        p{
            padding: 1.333vw 2.667vw;
            margin: 0 2.133vw;
            color: white;
            background-color: #fb7299;
            font-size: 13px;
            border-radius: 1.067vw;
        }
    }
}
</style>
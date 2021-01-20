//todo 用户相关的接口 注册  登录  获取个人信息 

//todo 1. 引入express 
const express = require('express')

//todo 2. 得到router实例
const router = express.Router()


//todo 3. 打造接口

//? 注册
router.post('/register',(req,res,next) => {
    //? next 表示req和res之间的链接，比如讲req和res看做桥的两端
    console.log(req.body)
    res.json({
        status: 2,
        msg: '注册成功'
    })
})

//? 登录
router.post('/login',(req,res,next) => {
    //? next 表示req和res之间的链接，比如讲req和res看做桥的两端
    res.json({
        status: 2,
        msg: '登录成功'
    })
})
router.post('/getUserInfo',(req,res,next) => {
    //? next 表示req和res之间的链接，比如讲req和res看做桥的两端
    res.json({
        status: 2,
        msg: '获取信息成功',
        data: {
            username: 'lakers',
            phone: 'xx'
        }
    })
})


//todo 4. 导出router 
module.exports = router 
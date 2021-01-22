var express = require('express');
var router = express.Router();
//todo 5. 引入数据库
var {user} = require('../db')

//! 注册接口
  router.post('/register',async (req,res,next) => {
    //? req.body来接受post请求的数据  {}
    //? 数据库操作
    const  result = await user.add(req.body)
    res.json(result)
  })
  //! 登录接口
  router.post('/login',async (req,res,next) => {
    //拿着接收到数据去数据库做比对
    const result = await user.login(req.body)
    // 令牌在这里生成
    res.json({
      ...result,
      token: '令牌'
    })
  })



module.exports = router;

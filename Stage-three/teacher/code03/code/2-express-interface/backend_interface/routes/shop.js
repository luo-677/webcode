//todo 商品的接口  增 删 改 查

//? 思考 商品的CURD应该做几个接口？
//? 分析： 1. 一个功能做一个，4个
/* 
    http://localhost:3000/api/shop/add
    http://localhost:3000/api/shop
    http://localhost:3000/api/shop/update
    http://localhost:3000/api/shop/remove

    很久以前都是这么做的
    缺点； 
        1. 4个接口4套逻辑，复用逻辑会重复
        2. 一个项目接口量太大了，人工量太大了，开发成本就高了
*/

//? 解决： 新出土了规则：   restFul api 


const express = require('express')

const router = express.Router()

router
    .route('/shop')
        .post((req,res,next) => {
            res.json({
                msg: '请求成功'
            })
        })
        .get((req,res,next) => {
            console.log(req.query)
            res.json({
                msg: '请求成功'
            })
        })
        .put((req,res,next) => {
            console.log('put',req.body)
            res.json({
                msg: '请求成功'
            })
        })
        .delete((req,res,next) => {
            console.log('delete',req.body)
            res.json({
                msg: '请求成功'
            })
        })

module.exports = router 
const express = require('express')
const router = express.Router()

router.route('/shop')
    .post((req, res, next) => {
        res.json({
            msg: '请求成功'
        })

    })
    .get((req, res, next) => {
        res.json({
            msg: '请求成功'
        })

    })
    .put((req, res, next) => {
        res.json({
            msg: '请求成功'
        })

    })
    .delete((req, res, next) => {
        res.json({
            msg: '请求成功'
        })

    })

module.exports = router 
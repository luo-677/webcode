const express = require('express')

const router = express.Router()

const {checkToken} = require('../token')

router.post('/checkToken',async (req,res,next) => {
    const {authtoken}  = req.headers
    if (!authtoken) {
        res.json({
            status: 0,
            msg: 'token验证失败，请先登录'
        })
         
    } else {
        const result = await checkToken(authtoken)
        res.json(result)
    }
})

module.exports = router 
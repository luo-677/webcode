//todo 文件上传

const express = require('express')
const router = express.Router()
const path = require('path')

//todo 1. 引入multer
const multer = require('multer')
//todo 2. 设置磁盘存储引擎 
var storage = multer.diskStorage({
    destination: function (req, file, cb) { //! 设置存放上传文件的目录
        cb(null, path.join(__dirname,'../public/upload'))
    },
    filename: function (req, file, cb) { //! 设置上传文件文件名
        const suffix = file.originalname.split('.')[1]
        const fileName = file.fieldname + '-' + Date.now() +'.'+ suffix
        req.file = fileName
        cb(null, fileName)
    }
})

var upload = multer({ storage: storage })

//? 问题： 文件的数据拿不到？
//? 怎么办？ 
//? 解决：

//todo 3. 添加upload.any
router.post('/upload', upload.any(),(req, res, next) => {
    // console.log('upload', req.file)
    console.log(req.body)
    res.json({
        msg: '图片上传成功',
        pic: `/upload/${req.file}`
    })
})


module.exports = router 
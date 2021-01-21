// 引入 express 模块
var express = require('express');
// 创建 router 对象
var router = express.Router();

/* GET home page. */
// 使用router创建get请求
router.get('/', function(req, res, next) {
    // 将send换成render
    // index是views中的index.pug文件，相当于请求直接返回了页面，！！！后面的对象相当于传入的参数
    // 在app.js中已经进行了指定
    res.render('index', { title: 'Express' });
});

module.exports = router;
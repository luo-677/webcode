//todo 引入第三方模块和内置模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//todo 引入自定义模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');

//todo 得到app实例，因为他的功能全部放到了app  --- 应用级中间件
var app = express();

//todo 设置模板引擎为pug/ejs/art template/...,静态目录为views 
app.set('views', path.join(__dirname, 'views')); // 设置静态目录
app.set('view engine', 'pug'); // 设置模板引擎


app.use(logger('dev')); // 日志

//todo 专门用于post请求，  用于接收前端发过来的数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser()); // cookie 操作
app.use(express.static(path.join(__dirname, 'public'))); // 指定静态资源目录

//todo  创建路径和路由的对应关系 -- 路由中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/car', carRouter);

//todo 如果路径没有对应路由，则报404 --- 错误处理中间件
app.use(function(req, res, next) {
    next(createError(404));
});

//todo 处理除了404以外的其他错误  --- 错误处理中间件
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
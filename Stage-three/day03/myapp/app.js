// 引入本地模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入自定义模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 使用express创建app实例 --- 应用级中间件
var app = express();

// view engine setup
// 指定模板引擎的路径所以在routes中可以进行简写
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev')); // 日志文件

// 专门用于post请求，用于接收前端发过来的数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 执行cookie操作
app.use(cookieParser());

// 指定静态文件路径
app.use(express.static(path.join(__dirname, 'public')));

// 绑定路由，将自定义模块与请求路径进行绑定 --- 路由中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// 如果路径没有对应的路由，则报 404 错误
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
// 解决除了 404 以外的其他报错
// 3.. 重定向 4.. 资源路径错误 5.. 后端服务错误
// 错误处理中间件
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
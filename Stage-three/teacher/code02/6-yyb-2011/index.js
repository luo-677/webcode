//todo  复用逻辑 或者 代码布局结构

//! 自定义模块引入时，require中写两个文件之间的相对路径
const date = require('./module/date.js')
const cookie = require('./module/cookie.js')

//todo 导出所有的格式化逻辑

module.exports = {
    date,cookie
}
//! 自定义模块引入时，require中写两个文件之间的相对路径
const obj = require('./4-自定义模块.js')

//! 当前时间 

const nowTimer = Date.now()  //! 得到的是当前时间的时间戳
// console.log(nowTimer)
//! 对日期做格式化
const result = obj.timeFilter(nowTimer)
console.log(result)
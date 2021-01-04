// 引入内置函数模块
const path = require('path');
console.log(path);
// 地址拼接方法
let url = path.join(__dirname, '6.path.js'); // 路径拼接
console.log(url); // D:\githubforwebcode\js-day31\6.path.js
console.log(path.extname(url)); // .js 获取文件的后缀名
console.log(path.dirname(url)); // D:\githubforwebcode\js-day31 获取目标路径的文件夹名
console.log(path.basename(url, '.js')); // 6.path 获取目标路径的文件名(去除后缀名)
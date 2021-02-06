const path = require('path');
const fs = require('fs');
let url = path.join(__dirname, 'test.txt');
let data = 'hello world';
// 传入参数：文件地址 写入内容 回调函数
fs.writeFile(url, data, err => {
    if (err) throw err;
    console.log('写入成功');
})
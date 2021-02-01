const path = require('path');
const fs = require('fs');
let url = path.join(__dirname, '2.pat.js');
// 传入参数，url，编码格式，回调函数
// console.log(1);
// fs.readFile(url, 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     })
console.log(1);
// 同步方式去读取文件，参数只有路径和编码格式，没有回调函数，会自动返回结果或者错误
let data = fs.readFileSync(url, 'utf8');
console.log(data);
console.log(2);
const path = require('path');

// 服务器编程 后端编程
// 前端相对 后端绝对
// console.log(__dirname + './html/index.html');

// path.join();  用于拼接路径

let url = path.join(__dirname, 'html', 'index.html');
console.log(url);

// path.extname(); // 获得文件后缀名
console.log(path.extname(url));

// path.dirname();  // 获得目录路径
console.log(path.dirname(url));

// path.basename(); // 获得文件名
console.log(path.basename(url, '.html'));
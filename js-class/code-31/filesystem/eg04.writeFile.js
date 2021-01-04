const path = require('path');
const fs = require('fs');

let data = '<h1>你好世界</h1>';


// fs.writeFile(file, data[, options], callback)
let url = path.join(__dirname, 'html', 'hello.html');
fs.writeFile(url, data, err => {
    if (err) throw err;
    console.log('文件写入成功');
});
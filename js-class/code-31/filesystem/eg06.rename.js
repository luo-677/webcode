const fs = require('fs');
const path = require('path');

// fs.rename(oldPath, newPath, callback)

let oldpath = path.join(__dirname, 'html', 'hello.html');
let newpath = path.join(__dirname, 'html', '1.html');

fs.rename(oldpath, newpath, err => {
    if (err) throw err;
    console.log('修改成功');
});
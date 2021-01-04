const path = require('path');
const fs = require('fs');
let oldFile = path.join(__dirname, 'test.txt');
let newFile = path.join(__dirname, 'lala.txt');
fs.rename(oldFile, newFile, err => {
    if (err) throw err;
    console.log('修改成功');
})
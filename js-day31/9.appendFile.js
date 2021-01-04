const path = require('path');
const fs = require('fs');
let url = path.join(__dirname, 'test.txt');
let data = 'lalalalala';
fs.appendFile(url, data, err => {
    if (err) throw err;
    console.log('追加成功');
})
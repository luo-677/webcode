const fs = require('fs');
const path = require('path');


let data = '<h1>hello world</h1>';

fs.appendFile(path.join(__dirname, 'html', 'hello.html'), data, err => {
    if (err) throw err;
    console.log('追加成功');
});
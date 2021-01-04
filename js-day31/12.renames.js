const path = require('path');
const fs = require('fs');
const { fileURLToPath } = require('url');
let url = path.join(__dirname, 'img');
fs.readdir(url, (err, files) => {
    if (err) throw err;
    files.forEach((elm, i) => {
        let oldName = path.join(url, elm);
        let newName = path.join(url, `${i+1}.${path.extname(elm)}`);
        fs.rename(oldName, newName, err => {
            if (err) throw err;
            console.log('修改成功');
        })
    })
})
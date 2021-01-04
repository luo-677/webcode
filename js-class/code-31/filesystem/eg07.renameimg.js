const path = require('path');
const fs = require('fs');

// fs.readdir(path[, options], callback)

fs.readdir(path.join(__dirname, 'img'), (err, files) => {
    if (err) throw err;
    // console.log(files);
    files.forEach((elm, i) => {
        let oldPath = path.join(__dirname, 'img', elm);
        let extName = path.extname(oldPath);
        let newPath = path.join(__dirname, 'img', `img-${i+1}${extName}`);
        // console.log(oldPath, extName);
        // console.log(newPath);
        fs.rename(oldPath, newPath, err => {
            if (err) throw err;
            console.log('修改成功');
        });
    });
});
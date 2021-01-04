const path = require('path');
const fs = require('fs');
let url = path.join(__dirname, 'img');
fs.readdir(url, (err, files) => {
    if (err) throw err;
    files.forEach(elm => {
        console.log(elm);
    })
});
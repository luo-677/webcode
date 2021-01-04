const fs = require('fs');
const path = require('path');

// fs.readFile(path[, options], callback);

let url = path.join(__dirname, 'html', 'index.html');

console.log(1);
fs.readFile(url, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// let data = fs.readFileSync(url, 'utf8');

// console.log(data);

console.log(3);
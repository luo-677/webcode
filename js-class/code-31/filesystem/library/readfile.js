const fs = require('fs');
const path = require('path');

function readFile() {
    let url = path.join(__dirname, '..', ...arguments);

    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

module.exports = { readFile };
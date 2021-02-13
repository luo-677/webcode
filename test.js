const fs = require("fs");
const path = require("path");
fs.readdir(__dirname, (err, file) => {
    for (let i in file) {
        console.log(file[i]);
    }
});
const { readFileSync } = require('fs');
const { readFile } = require('./library/readfile');


// readFile('html', 'index.html').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

(async() => {
    let data = await readFile('html', 'index1.html');
    console.log(data);
})();
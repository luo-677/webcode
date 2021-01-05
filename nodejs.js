const http = require('http');
let port = 8888;
let server = http.createServer((req, res) => {
    res.writeHead({ 'content-type': 'text/html;charset=utf-8' });
    res.end('<h1>请求已收到</h1>');
})
server.listen(port, () => {
    console.log('ok');
})
const { readFileSync } = require('fs');
const http = require('http');
const path = require('path');
// const fs = require('fs');
const { readFile } = require('./library/readfile');


let port = 8888;

let server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return;

    // 输出用户请求的方式 地址 路径
    console.log(`${req.method} ${req.headers.host}${req.url}`);

    // 设置响应头
    // res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

    (async() => {
        let data = null; // 读取文件的数据

        // 根据不同的文件请求 设置不同的响应头
        switch (path.extname(req.url)) {
            case '.css':
                res.writeHead(200, { 'content-type': 'text/css;charset=utf-8' });
                break;
            case '.js':
                res.writeHead(200, { 'content-type': 'text/javascript;charset=utf-8' });
                break;
            default:
                res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
        }

        // 用分支结构处理请求路径
        switch (req.url) {
            case '/':
                data = await readFile('public', 'html', 'index.html');
                break;
            case '/news':
                data = await readFile('public', 'html', 'news.html');
                break;
            case '/js/index.js':
                data = await readFile('public', 'js', 'index.js');
                break;
            case '/index.css':
                data = await readFile('public', 'css', 'index.css');
                break;
            default:
                data = await readFile('public', 'html', '404.html');
                break;
        }
        res.end(data);
    })();
});

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
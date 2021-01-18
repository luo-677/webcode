const http = require('http');
const path = require('path');
const fs = require('fs');


let port = 8888;

let server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return;

    // 输出用户请求的方式 地址 路径
    console.log(`${req.method} ${req.headers.host}${req.url}`);

    // 设置响应头
    // res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

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
            fs.readFile(path.join(__dirname, 'public', 'html', 'index.html'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
        case '/news':
            fs.readFile(path.join(__dirname, 'public', 'html', 'news.html'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
        case '/js/index.js':
            fs.readFile(path.join(__dirname, 'public', 'js', 'index.js'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
        case '/index.css':
            fs.readFile(path.join(__dirname, 'public', 'css', 'index.css'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;

        default:
            res.end('404');
            break;
    }
});

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
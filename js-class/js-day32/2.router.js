// 引入各个模块
const http = require('http');
const path = require('path');
const fs = require('fs');

// 指定服务端口
let port = 8088;

// 创建http服务
let server = http.createServer((req, res) => {
    // 屏蔽无关请求
    if (req.url === '/favicon.ico') return;

    // res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

    // 动态响应请求头
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

    // 路由返回请求
    switch (req.url) {
        case '/':
            fs.readFile(path.join(__dirname, 'http', 'index.html'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
        case '/index.css':
            fs.readFile(path.join(__dirname, 'http', 'index.css'), 'utf8', (err, data) => {
                if (err) console.log(err);
                res.end(data);
            });
            break;
    }
});

// 开启服务监听
server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
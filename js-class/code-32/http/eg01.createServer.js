const http = require('http');

// http.createServer([options][, requestListener])

let port = 8088;

let server = http.createServer((req, res) => {
    // req request  请求
    // res response 响应

    if (req.url === '/favicon.ico') return;

    console.log(req.url);


    // 设置响应头信息
    // 第一个参数是http状态码
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

    // res.write('<h1>hello world</h1>');
    // res.write('<h1>hello world</h1>');
    // res.write('<h1>hello world</h1>');
    // res.write('<h1>hello world</h1>');

    res.end('<h1>响应完成</h1>'); // 结束响应
});

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
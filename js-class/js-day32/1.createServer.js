// 引入http模块
const http = require('http');

// console.log(http);

// 创建监听端口
let port = 8088;

// 创建http服务
let server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return;
    console.log(req.url);

    // 创建响应头，根据响应头去解析不同的文件
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });

    // 数据块chunk，数据可以分块进行发送
    // res.write();
    // res.write();
    // res.write();
    // res.write();

    // 结束响应
    res.end('<h1>响应完成</h1>');
});

// 将服务与端口进行绑定
server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
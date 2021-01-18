// 1. 引入http模块
const http = require("http");
// 2. 创建服务监听端口
const PORT = 8888;
// 3. 创建主机名
const HOST_NAME = "localhost";

// 4. 创建http服务(参数为一个回调函数，回调函数中的参数为req请求，res结果)
http.createServer((req, res) => {
    // 5. 设置响应头 参数1:状态码 参数2:数据格式和编码格式
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    // 6. 设置数据返回内容
    res.write("你好!");
    // 7. 设置响应结束
    res.end();
    // 8. 设置监听内容 参数1:端口 参数2:主机名 参数3:回调函数
}).listen(PORT, HOST_NAME, () => {
    console.log(`This server is running at http://${HOST_NAME}:${PORT}`);
});
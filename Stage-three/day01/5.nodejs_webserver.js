// 1. 引入http模块
// 2. 设定监听端口
// 3. 设定主机名
// 4. 创建http服务，参数只有一个回调函数，回调函数的参数为req和res
// 5. 设置响应头
// 6. 创建get请求，参数1为请求地址，参数2为回调函数，回调函数中为响应结果
// 7. 创建状态码
// 8. 创建文件头类型
// 9. 创建错误
// 10. 处理错误
// 11. 接收数据
// 12. 数据接收完毕后，将数据进行返回
// 13. 传入监听参数，端口，主机名，回调函数
const http = require("http");
const PORT = 8888;
const HOST_NAME = 'localhost';
http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    });
    http.get('http://59.110.226.77:3000/api/category', responce => {
        let { statusCode } = responce;
        let contentType = responce.headers["content-type"];
        let err;
        if (statusCode != 200) {
            err = new Error("请求出错");
        } else if (!/text\/html/.test(contentType)) {
            err = new Error("请求文件类型错误");
        }
        if (err) {
            throw err;
            responce.resume();
            return;
        }
        let rowData = "";
        responce.on('data', chunk => {
            rowData += chunk;
        })
        responce.on('end', () => {
            res.write(rowData);
            res.end();
        })
    })
}).listen(PORT, HOST_NAME, () => {
    console.log(`The server is running at: http://${HOST_NAME}:${PORT}`);
})
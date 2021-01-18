// 1. 引入http模块
const http = require("http");
// 2. 设定监听端口
const PORT = 8888;
// 3. 设定主机名
const HOST_NAME = 'localhost';
// 4. 创建http服务，参数只有一个回调函数，回调函数的参数为req和res
http.createServer((req, res) => {
    // 5. 设置响应头，参数为状态码和响应头类型对象
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    });
    // 6. 创建get请求，参数1为请求地址，参数2为回调函数，回调函数中为响应结果
    http.get('http://59.110.226.77:3000/api/category', (response) => {
            // 7. 创建状态码
            const { statusCode } = response;
            // 8. 创建文件头类型
            const contentType = response.headers['content-type'];
            let error;
            // 9. 创建错误
            if (statusCode != 200) {
                error = new Error("请求状态错误");
            } else if (!/text\/html/ig.test(contentType)) {
                error = new Error("请求文件错误");
            }
            // 10. 处理错误
            if (error) {
                throw error;
                response.resume();
                return;
            }
            // 11. 接收数据
            let rowData = '';
            response.on('data', chunk => {
                    rowData += chunk;
                })
                // 12. 数据接收完毕后，将数据就行返回
            response.on('end', chunk => {
                res.write(rowData);
                res.end();
            })
        })
        // 13. 传入监听参数，端口，主机名，回调函数
}).listen(PORT, HOST_NAME, () => {
    console.log(`The server is running at: http://${HOST_NAME}:${PORT}`);
});
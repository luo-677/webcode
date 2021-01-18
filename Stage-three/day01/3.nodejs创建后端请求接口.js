const http = require("http");
// 1. 创建get请求 参数1:请求地址 参数2:回调函数，参数只有响应结果
http.get('http://59.110.226.77:3000/api/category', (res) => {
    // 2. 获得响应结果状态码
    const { statusCode } = res;
    // 3. 获取响应结果文件头
    const contentType = res.headers['content-type'];
    // 4. 新建错误
    let error;
    // 5. 针对状态码和文件头进行错误处理
    if (statusCode != 200) {
        error = new Error(`状态码为${statusCode}`);
    } else if (!/text\/html/gi.test(contentType)) {
        error = new Error(`文件类型错误`);
    }

    // 6. 如果有错误，处理错误
    if (error) {
        throw error;
        res.resume();
        return;
    }

    // 7. 数据接收
    let rowData = '';
    res.on('data', chunk => {
        rowData += chunk;
    });

    // 8. 数据接收完毕
    res.on('end', () => {
        console.log(rowData);
    })
})
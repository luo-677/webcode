const http = require("http");
const cheerio = require("cheerio");
const PORT = 8888;
const HOST_NAME = 'localhost';
const options = { // 为了真实模拟请求，所以这边提交的内容要与真实登录的内容相同
    hostname: 'jx.1000phone.net',
    port: 80,
    path: '/teacher.php/Class/classDetail/param/rqiWlsefmajGmqJhXXWhl3ZjZWlm',
    method: 'GET',
    headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Cookie: 'PHPSESSID=ST-23321-rwXLt14DHOLLtZSOGfOzV84uzUI-izm5ejd5j1npj2pjc7i3v4z',
        Host: 'jx.1000phone.net',
        Referer: ' http://jx.1000phone.net/teacher.php/Class/index',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': 0
    }
};

http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    });
    http.get(options, responce => {
        let rowData = "";
        responce.on('data', chunk => {
            rowData += chunk;
        })
        responce.on('end', () => {
            // jquery在浏览器环境中进行隐式转换，可以直接进行DOM对象操作
            // 在服务器环境中，需要使用.load()方法将目标转换成jq可操作对象
            const $ = cheerio.load(rowData);
            $('td.student').each(function(index, elm) {
                res.write(`<div>${$(elm).text()}</div>`);
            })
            res.end();
        })
    })
}).listen(PORT, HOST_NAME, () => {
    console.log(`The server is running at: http://${HOST_NAME}:${PORT}`)
})
/* 
    爬虫
        1. 发送数据请求，得到数据【text/html】      http
        2. 需要工具去清洗网页，拿到我们想要的内容    cheerio
            - cnpm/npm i cheerio -S/-D
            - -S  表示为生产环境安装
            - -D  表示为开发环境安装
        3. 搭建服务器，将我们拿到的内容给到服务器界面
    反爬虫
        违反工具使用规则即可
    不是所有网站都可以爬虫的
        前后端不分离的网站： 
            国字布局
            控制台/network/doc  返回值类型是什么
*/

const http = require('http')
const cheerio = require('cheerio')
const PORT = 3000 
const HOST_NAME = 'localhost'
const options = { //? 放什么? 放的是数据请求的参数 ，看你的目标网站
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
}

http.createServer((request,response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })

    // 发送数据请求
    http.get(options, res => {
        let rawData = ''
        res.on('data',chunk => {
            rawData+=chunk
        })
        res.on('end',() => {
            // console.log(rawData)
            const $ = cheerio.load(rawData)
            //es5语法
            $('td.student').each(function (index,ele) {
                // console.log($(this).text())
                response.write(`<div
                    style="color:red;"
                >${$(this).text()}</div>`)
            })
            response.end()
        })
    })
  

}).listen(PORT, HOST_NAME, () => {
    console.log(`The server is running at: http://${HOST_NAME}:${PORT}`)
})


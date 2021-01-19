
//todo 1. 引入内置api http
const http = require('http')
const PORT = 3000 
const HOST_NAME = 'localhost' // 127.0.0.1 / ipv4 address 

//todo 2. 创建服务器
// http.createServer(callback)  callback/request&response 

http.createServer((req,res) => {
    // res.write('Hello')
    //todo 中文编码
    res.writeHead(200,{ //? 中文编码  200表示状态码
        'Content-Type': "text/html;charset=utf-8"
    })
    res.write('你好') //? 表示相应内容
    res.write('你好') //? 表示相应内容
    res.write('你好') //? 表示相应内容
    res.write('你好') //? 表示相应内容
    res.write('你好') //? 表示相应内容
    res.write('你好') //? 表示相应内容
    //? res.end() 去掉会如何？
    res.end() //? 响应结束
}).listen(PORT,HOST_NAME,() => { //? listen 监听当前服务器
    console.log(`The server is running at: http://${HOST_NAME}:${PORT}`)
})
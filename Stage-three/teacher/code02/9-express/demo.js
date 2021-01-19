//! 尝鲜 -- 用一下

const express = require('express')
const path = require('path')
const PORT = 3000 
const HOST_NAME = 'localhost'
//todo 得到app实例
const app = express()

//todo 指定静态资源文件
app.use(express.static(path.join(__dirname,'./public')))

//todo 
app.get('/',(req,res) => {
    res.send('<img src="/img/0.jpg" />')
})

app.get('/car',(req,res) => {
    res.send('购物车')
})

app.get('/users',(req,res) => {
    // res.send('hello')
    res.json({
        a: 1,
        b: 2
    })
})

app.listen(PORT,HOST_NAME,() => {
    console.log(`The server is running at: http://${HOST_NAME}:${PORT}`)
})
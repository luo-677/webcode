const http = require('http')
const PORT = 300 
const HOST_NAME = 'localhost'
http.createServer((req,res) => {
    res.write('hello')
    res.end()
}).listen(PORT,HOST_NAME,() => {
    console.log(`The server is running at: http://${HOST_NAME}:${PORT}`)
})
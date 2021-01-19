/* 
    * 业务： Node.js中发请求，得到数据，渲染数据
*/

const http = require('http')
http.get('http://59.110.226.77:3000/api/category',(res) => {
    // console.log(res.statusCode) 200 表示请求成功

    //todo 错误处理
    const {statusCode} = res
    const contentType = res.headers['content-type']
    let error 
    if (statusCode != 200) {
        //! 请求出错了
        error = new Error(`状态码是${statusCode}`)
    } else if (!/text\/html/gi.test(contentType)){
        error = new Error(`我想要的是application/json,但是你给的是${contentType}`)   
    }

    if (error){
        //! 证明出错了
        throw error
        res.resume() //? 释放内存 
        return;
    }

    //? 得到结果了， 怎么拿数据  ， 片段式的数据拿取【流式数据】

    //? data 事件来获取数据
    let rawData = ''
    res.on('data',chunk => {
        rawData += chunk  // 累加获取数据
    })

    res.on('end',() => { // 数据获取结束
        console.log(rawData)
    })
})
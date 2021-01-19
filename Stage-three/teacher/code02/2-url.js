/* 
    * url   处理url  
        * string => object 
        * object => string 
*/

//todo 需求：http://m.root.cn:8000/index/a?goodid=1002&goodname=手机#hash ,要求转成对象

//todo 1. url引入
const url = require('url')
const qs = require('querystring')
const urlStr = 'http://m.root.cn:8000/index/a?goodid=1002&goodname=手机#hash'
const obj = url.parse(urlStr) //? string -> object 
// console.log(obj)

const str = url.format(obj) //? object -> string 
// console.log(str)

//todo 需求 query 'goodid=1002&goodname=手机' 转成{goodid: 1002,goodname: '手机'}

const {query} = obj 
const queryObj = qs.parse(query)
console.log(queryObj)
const url = require("url");
const qs = require("querystring");
const { type } = require("os");
const urlStr = 'http://m.root.cn:8000/index/a?goodid=1002&goodname=手机#hash';
// 将请求地址转换成对象
let obj = url.parse(urlStr);
// console.log(obj);
// 返回内容
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'm.root.cn:8000',
//     port: '8000',
//     hostname: 'm.root.cn',
//     hash: '#hash',
//     search: '?goodid=1002&goodname=手机',
//     query: 'goodid=1002&goodname=手机',
//     pathname: '/index/a',
//     path: '/index/a?goodid=1002&goodname=手机',
//     href: 'http://m.root.cn:8000/index/a?goodid=1002&goodname=手机#hash'
//   }
// 将对象转换成请求地址
let objStr = url.format(obj);
console.log(objStr);
// http://m.root.cn:8000/index/a?goodid=1002&goodname=手机#hash

// 需求 query 'goodid=1002&goodname=手机' 转成{goodid: 1002,goodname: '手机'}
console.log(typeof(qs.parse(obj.query)));
console.log(qs.parse(obj.query));
let { goodid, goodname } = qs.parse(obj.query);
console.log(goodid, goodname);
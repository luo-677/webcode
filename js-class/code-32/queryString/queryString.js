const querystring = require('querystring');

// console.log(querystring);

// querystring.parse();  // 将一个查询字符串转成对象

// let str = 'username=zhangsan&age=20&sex=nan';

// let obj = querystring.parse(str);

let o = {
    username: 'zhangsan',
    age: '20',
    sex: 'nan'
};
// querystring.stringify();  用于将对象转成查询字符串
console.log(querystring.stringify(o));
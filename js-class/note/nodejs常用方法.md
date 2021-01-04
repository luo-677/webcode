# node.js常用api
## 1. process
1. process是node.js的内置对象
2. process.argv用于接收传入的所有参数
```JavaScript
// 参数1 参数2 参数3 参数4
node test.js install hello;
argv = ['D:\\app\\nodejs\\node.exe','D:\\githubforwebcode\\js-day31\\1.process.js','install','hello'];
// 可以通过对传入的参数进行应用判断
switch(argv[2]){
    case 'install':
        console.log('应用正在进行安装');
        break;
}
```
## 2. 内置path
1. path中有两个全局参数
2. __dirname 和 __filename
```JavaScript
// __dirname 当前文件目录的绝对路径
// D:\githubforwebcode\js-day31
console.log(__dirname);
// __filename 当前文件的绝对路径
// D:\githubforwebcode\js-day31\2.path.js
console.log(__filename);
```
## 3. callback
1. node.js中回调函数的第一个参数默认为错误参数
```JavaScript
function isOdd(num,callback){
    if(typeof num != 'number'){
        callback(new Error('这不是一个数字'));
    }else if(parseInt(num) === num){
        if(num % 2){
            callback(null,'这是一个奇数');
        }else{
            callback(null,'这是一个偶数');
        }
    }
}
isOdd(5,function(err,msg){
    if(err) throw err;
    console.log(msg);
});
```
## 4. 模块的制作和引入
1. 模块制作使用 module.exports = {}
```JavaScript
// ./module.js
let a = 4;
let b = 5;
module.exports = {a,b};

// ./modules.js
class Student {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(this.name);
    }
}
```
2. 模块的引入使用 const {} = require('./file(没有后缀)')
```JavaScript
const {a,b} = require('./module');

const Student = require('./modules');
const student = new Student('zhangsan'.18);
student.sayName();
console.log(student.name);
console.log(student.age);
```
## 5. path模块
```JavaScript
// 引入内置path模块
const path = require('path');
// path内置地址拼接方法
let url = path.join(arg1,arg2,arg3...);
// 获取当前文件的后缀名
console.log(path.extname(url));
// 获取当前文件的目录路径
console.log(path.dirname(url));
// 获取出去后缀的文件名
console.log(path.basename(url,'.js'));
console.log(path.basename(url,path.extname(url)));
```
## 6. readFile
```JavaScript
const path = require('path');
const fs = require('fs');
let url = path.join(__dirname,'index.html');
// 异步读取文件内容
fs.readFile(url,'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
// 同步读取文件内容，会自动返回错误或者内容
let data = fs.readFileSync(url,'utf8');
console.log(data);
```
## 7. writeFile
```JavaScript
const path = require('path');
const fs = require('fs');
let url = path.join(__dirname,'index.html');
let data = 'hello';
fs.writeFile(url,data,err=>{
    if(err) throw err;
    console.log('写入成功');
})
```
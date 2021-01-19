function sum (a,b) {
    return a + b 
}

const f = sum(10,50)
console.log(f)

//? 我只有在修改代码之后再次运行文件才能得到最新结果 
//? 需求： 实时监听文件变动  
//todo 安装nodemon
// todo 1. npm/cnpm i nodemon -g
// todo 2. nodemon  文件名
// callback 回调函数

// 将一个函数作为参数传入另外一个函数中使用

// 回调函数可以修改代码的执行顺序

// 一般情况 回调可以用于异步的处理

// 在nodejs中所有的异步操作都是由回调函数完成的

// nodejs在开发初期有一个规定 

// 所有的异步回调函数 都是以错误(参数)优先的

function isOdd(num, callback) {
    if (typeof num != 'number') {
        callback(new Error('传入的参数不是数字'));
    } else if (parseInt(num) === num) {
        if (num % 2) {
            callback(null, '是奇数');
        } else {
            callback(null, '是偶数');
        }
    }
}

isOdd(5, function(err, msg) {
    if (err) throw err; // 关键字 throw  抛出错误 终止代码执行
    console.log(msg);
});

isOdd('abc', function(err, msg) {
    if (err) throw err;
    console.log(msg);
});
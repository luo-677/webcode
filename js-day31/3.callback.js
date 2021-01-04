function isOdd(num, callback) {
    if (typeof num != 'number') {
        callback(new Error("这不是一个数字"));
    } else if (parseInt(num) === num) {
        if (num % 2) {
            callback(null, '这是一个奇数');
        } else {
            callback(null, '这是一个偶数');
        }
    }
}

isOdd(5, function(err, msg) {
    console.log(msg);
})
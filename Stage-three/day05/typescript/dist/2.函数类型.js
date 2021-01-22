"use strict";
function sum(x, y) {
    return x + y;
}
// 参数数量已经被指定，不能超出，也不能不足
// sum(1,2,3);
// sum(1);
// 通过赋值的方式定义函数
var mySum = function (x, y) {
    return x + y;
};

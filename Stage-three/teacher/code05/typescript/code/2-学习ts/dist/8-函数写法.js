"use strict";
/*
    * 原生js
        * function add () {}
        * const add = function () {}
        * const add = () => {}
    * 函数里面的数据是什么？
        * 参数 + 返回值
*/
function add(a, b) {
    return 100;
}
var add2 = function (a, b) {
    return a + b;
};
var add3 = function (a, b) {
    return a + b;
};
//!!! TS给函数提供的类型特别写法
var add4 = function (a, b) { return a + b; };
var add5 = function (a, b) { return a + b; };

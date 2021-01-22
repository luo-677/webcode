"use strict";
// 布尔值
var bol = false;
// 数字
var num = 1;
// 字符串，可以使用模板字符串
var str1 = "lalala";
// 数组
// 使用常规数组定义法
var list1 = [1, 2, 3, 4];
// 使用数组泛型
var list2 = [1, 2, 3, 4];
// 元组
// 数量和类型需要保持一致
var list3 = [1, "1"];
// 枚举 enum类型
// 默认情况下元素编号从0开始
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c = Color1.Green;
// 可以手动将元素编号改成从1开始
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var d = Color2.Green;
var e = Color2[3];
// any 任意类型
var notSure = 4;
notSure = "111";
notSure = false;
var x = 4;
x.ifItExists(); // ?
x.toFixed(); // ?
// 包含任意类型数据的数组
var list4 = [1, "1", false];
list4[1] = 100;
// void
// 当一个函数没有返回值时，将其返回值类型设置为void
function echo() {
    console.log("111");
}
// void只能赋值为undefined和null

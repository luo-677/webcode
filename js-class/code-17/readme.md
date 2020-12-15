# 面向对象程序设计(一种计算机编程架构)
OOP(Object Oriented Programming)

主流编程思想
- 面向过程编程(函数式编程 基于函数)
- 面向对象编程(基于 类 Class)

JavaScript中没有类(Class)
ECMAScript 6 新增关键字 `class` 是构造函数的语法糖
学习面向对象编程思想
JavaScript语言的特性可以实现类似于 面向对象语言的特性

面向对象编程思想
封装 继承 多态

封装 包装 将一些零散的内容放在一起 行成一个整体  对象
继承 从其他对象中获得属性或方法
多态 多种形态 多种状态

在编程中 多态指的是函数的多种运行状态(函数重载)

```javascript
function fn(){
    switch(arguments.length){
        case 1:
            console.log(arguments[0].split(''));
            break;
        case 2:
            console.log((arguments[0]+arguments[1]).split(''));
            break;
        case 3:
            console.log(arguments[0]);
            break;
    }
}

fn('abc','123',1);
```

类 (Class)
类是一个抽象的概念 泛指一类事物 是一个较大的范围

犬(狗)类
四条腿
嗅觉灵敏

类 是比犬类更细化的分支 一个范围
金毛
萨摩耶
哈士奇
柯基
泰迪

对象 是类的具象化
小花养了一只萨摩耶 名叫小白 今年2岁 体重10kg 毛色纯白

类是对象的抽象化
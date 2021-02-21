// 使用 import...from 将需要使用的数据进行倒入
import {person,flag,sum} from "./a.js";
if(!flag){
    console.log(person.name);
}

import aaa from "./a.js";
console.log("我是default参数" + aaa);

// import sum from "./a.js";
sum(10,20);

// 单个数据倒入
import {sex} from "./a.js";
console.log(sex);

// 倒入类
import {persons} from "./a.js";
let p = new persons();
p.tellName();

// 统一倒入，指定一个对象作为载体，全部挂载到指定的对象下面
import * as all from "./a.js";
all.sum(20,30);
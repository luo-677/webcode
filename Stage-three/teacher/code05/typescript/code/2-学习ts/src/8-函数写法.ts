/* 
    * 原生js
        * function add () {}
        * const add = function () {}
        * const add = () => {}
    * 函数里面的数据是什么？
        * 参数 + 返回值  
*/

function add (a:number,b:number):number {
    return 100
}

const add2 = function (a:string,b:number):string {
    return a +  b 
}

const add3 = (a:string,b:string):string => {
    return a+b
}

//!!! TS给函数提供的类型特别写法
const add4:(a:number,b:number)=>number     =      (a,b) => a+b

//!!! 使用自定义类型来定义函数类型  --- 推荐
// type Add5Type = {
//     (a:number,b:number):number
// }
interface Add5Type  {
    (a:number,b:number):number
}
const add5:Add5Type = (a,b) => a+b
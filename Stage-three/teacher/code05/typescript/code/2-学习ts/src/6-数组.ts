/* 
    * 原生js
        * const arr = [1,2,3,4]
        * const arr = new Array(1,2,3,4)
*/

//? 1. 定义了一个元素只能为number类型的数组
const arr:number[] = [1,2,3,4] 
// arr.push('a')
arr.push(5)

//? 2. 定义了一个元素只能为string类型的数组
const arr2:string[] = ['a','b','c','d']
arr2.push('5')

//? 3. number&string --- 联合类型   "|" 我们叫管道符
const arr3:(number|string|boolean)[] = [1,2,3,4,'a','b','c','d',true]

//? 4. Array 
const arr4:Array<number> = new Array(1,2,3,4)
const arr5:Array<string> = new Array('a','b','c','d')
// const arr6:Array<string|number> = new Array(1,2,3,'a','b','c','d')  报错 联合类型不能这么用

//? 5. json 类型数组
const arr7:Object[] = [{id: 1,name: '手机',price: 100}] // 不推荐
const arr8:Arr8Type[] = [{id: 1,name: '手机',price: 100}] // 不推荐
// type Arr8Type = {
//     readonly id: number,
//     name: string,
//     price: number
// }
interface Arr8Type  {
    readonly id: number,
    name: string,
    price: number
}
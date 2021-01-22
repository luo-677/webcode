// 布尔值
let bol:boolean = false;

// 数字
let num:number = 1;

// 字符串，可以使用模板字符串
let str1:string = "lalala";

// 数组
// 使用常规数组定义法
let list1:number[] = [1,2,3,4];
// 使用数组泛型
let list2:Array<number> = [1,2,3,4];

// 元组
// 数量和类型需要保持一致
let list3:[number,string] = [1,"1"];

// 枚举 enum类型
// 默认情况下元素编号从0开始
enum Color1{Red,Green,Blue};
let c:Color1 = Color1.Green;
// 可以手动将元素编号改成从1开始
enum Color2{Red=1,Green,Blue};
let d:Color2 = Color2.Green;
let e:string = Color2[3];

// any 任意类型
let notSure:any = 4;
notSure = "111";
notSure = false;
let x:any = 4;
x.ifItExists(); // ?
x.toFixed(); // ?
// 包含任意类型数据的数组
let list4:any[] = [1,"1",false];
list4[1] = 100;

// void
// 当一个函数没有返回值时，将其返回值类型设置为void
function echo():void{
    console.log("111");
}
// void只能赋值为undefined和null
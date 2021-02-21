let person = {
    name: "xiaoluo",
    age: 18,
    skill: "sleep",
}
let flag = false;
if(flag){
    console.log("hello world");
}

// 使用 export 将需要暴露出去的数据进行导出
export {
    person,flag,sum
}

// 需要求证一下此种导出方式 export default
// default 有且只能有一个，导出的时候使用default，倒入时可以随意命名，不需要进行对应
let height = 1.88;
export default height;

function sum(sum1,sum2){
    console.log(sum1 + sum2);
}

export let sex = "man";

// 导出类
export class persons{
    constructor(name="xiaoluo",age=20){
        this.name = name;
        this.age = age;
    }
    tellName(){
        console.log(this.name);
    }
}
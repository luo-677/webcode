const obj:PType = {
    id: 1,
    name: 'lakers',
    age: 18
}

// const n: number = 100

// 自定义类型
type PType = {
    readonly id: number, // 只读属性
    'name': string,
    'age': number, // 必传属性
    'sex'?:string, // 可选属性
    [propName: string]: any // 任意属性  --- 不推荐，不要乱用 -- 打申请的
}

// 验证
// obj.age = '20'
// obj.id = 2

obj.sex = 'man'
obj.a = 1
obj.b = 2
obj.c = 3
obj.d = 4



//! 使用接口来定义自定义类型
const oo:OoType = {
    id: 1,
    name: 'yanyabing'
}
interface OoType {
    readonly id: number,
    name: string
}
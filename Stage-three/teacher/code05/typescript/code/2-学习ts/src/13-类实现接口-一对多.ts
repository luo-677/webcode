class App implements PersonType,WeightType {
    name = 'yanyabing'
    sex = 'man'
    age = 18
    weight = 140

}
//!! 使用interface来约定类的数据类型： 类实现接口
interface PersonType {
    name: string,
    sex: string,
    age: number,
    // fn: FnType
}


interface WeightType {
    weight: number
}

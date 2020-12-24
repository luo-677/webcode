# async
## 概念：ES2017新增async函数，用于异步操作的处理，是Generator的语法糖
## 写法：
```javascript
function* abc(){} ==> async abc(){}
// async 关键字是替换了Generator中的 *
// await 关键字是替换了Generator中的 yield
// 如果await后的表达式不是promise，则会自动调用promise.resolve将其转成promise对象(不是promise的对象必然会触发resolve方法)
```
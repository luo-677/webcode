# promise
## 概念：
promise是异步编程的一种解决方案，比传统的解决方案-回调函数和事件-更合理和更强大。<br>
它是由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象。
## 特点：
1. 对象的状态不受外界影响。
    - Promise对象代表一个异步操作，有三种状态：
        1. pending(进行中)
        2. fulfilled(已成功)
        3. rejected(已失败)
    - 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
    - Promise对象的状态改变，只有两种可能：
        1. 从pending变为fulfilled
        2. 从pending变为rejected
    - 只要这两种情况发生，状态就凝固了，会一直保持这个结果，这时就称为resolved(已定型)。
    - 如果改变已经发生了，再对Promise对象添加回调函数，也会得到这个结果。
    - 与事件监听不同，错过了事件，再去监听是没有结果的。
## 格式：
### 1.Promise创建对象：
```javascript
let p = new Promise((resolve,reject)=>{
    let num = 'abc';
    if(isNaN(num)){
        reject('变量 num 是NaN');
    }else{
        resolve('变量 num 是有效数字');
    }
})
console.log(p);
// p的输出如下所示
// Promise {<fulfilled>: "变量 num 是有效数字"}
//    __proto__: Promise
//    [[PromiseState]]: "fulfilled"
//    [[PromiseResult]]: "变量 num 是有效数字"
```
### 2.then & catch：
```javascript
Promise.prototype.then()
// 当promise的状态为fulfilled(已成功)时，执行then函数，将resolve中的值传递给then作为参数
// then函数会返回一个新的promise对象，支持链式调用
Promise.prototype.catch()
// 当promise的状态为rejected(已失败)时，执行catch函数，将reject中传递的值给catch作为参数
p.then(value=>{
    console.log(value);
}).catch(value=>{
    console.log(value);
});
```
### 3.finally：
```javascript
Promise.prototype.finally()
// 无论promise的状态是成功还是失败，都会执行
```
### 4.all：
```javascript
Promise.all([promise,...,promise])
// 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
// 接收一个数组作为参数，数组内存放的都是promise实例
// 返回值：新的promise对象
// 如果数组中的所有promise实例的状态都为成功，则新promise的状态为成功，新的promise对象的then将接收一个数组为所有promise的结果
// 如果数组中有一个promise的状态为失败，则新promise的状态为失败，第一个失败的结果会成为catch的结果
```
## promise和ajax的使用：
```javascript
let ajax = new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('get','./interface/helloword.txt');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            resolve(xhr.responseText);
        }
        setTimeout(()=>{
            reject(new Error('连接超时'));
        },2000);
    }
});
ajax.then(val=>{
    console.log(val);
}).catch(val=>{
    console.error(val);
});
```
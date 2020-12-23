# cookie的使用方式

## 1. cookie的存入：
```javascript
document.cookie = 'key=value';
使用键值对的方式将cookie数据存入到浏览器的cookie空间中
```
## 2. cookie的取出：
```javascript
let cookies = document.cookie; // 直接将所有的cookie进行取出
// username=root; password=123456; ... 将cookie取出来之后的返回值
// 所以要对cookie进行拆分处理
let arr = cookies.split(; ); // 第一步将所有的键值对进行分离
arr.forEach(elm=>{
		let item = elm.split("="); // 此处可使用 switch-case 语句进行分配
		console.log(`key:${item[0]},value:${item[1]}`);
})
```
## 3. 设置cookie的生存周期
```javascript
document.cookie = 'expires=time'; // 使用expires设置cookie过期时间
// 在存储cookie时同时进行设置
// 快速进行cookie销毁
document.cookie = 'username = "";expires=-1'; 
// 将生命周期设置为-1，会直接变成session，在关闭浏览器的同时进行全部销毁
```
## 4. cookie的路径问题
```javascript
// cookie在使用的时候会有路径问题
// 在同一个路径下，不同的页面之间可以共享cookie的值
// 后代路径中的页面可以访问祖代路径中的cookie，反过来不可以
// 为了祖代能访问后代路径中的cookie，将cookie的路径手动设置为根目录
document.cookie = 'path=/';
```
## 5. 封装cookie函数
```javascript
(function(){
		"use strict";
		const cookie={
				get(key){
						if(document.cookie){
								let cookies = document.cookie.split("; ");
								for(let i in cookies){
										let item = cookies[i].split("=");
										if(item[0] === key) return item[1];
								}
						}
						return "";
				},
				set(key,value,day){
						if(typeof day === "number"){
								let d = new Date();
								d.setDate(d.getDate() + day);
								document.cookie = `${key}=${value};expires=${d};path=/`;
						}else{
								document.cookie = `${key}=${value};path=/`
						}
						return this; // 方便后续使用链式调用
				},
				remove(key){
						this.set(key,"",-1);
				}
		};
		window.cookie = cookie; // 暴露给全局使用
})();
```






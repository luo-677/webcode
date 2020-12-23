# Ajax流程使用：
## 概念：
异步的javaScript和xml，传统的ajax使用xml进行数据的请求和封装
由于xml太大且不方便操作(JavaScript 核心DOM XML DOM) 后被替换成了json

## 核心对象：
XMLHttpRequest

## 常用方法：
```javascript
open(请求方式,请求地址,[异步])
send([数据])
setRequestHeader(请求头，值)
```

## 常用属性：
```javascript
readystate           ajax对象状态码 状态码为4表示读取响应结束
onreadystatechange   当readstate改变时触发的事件
status               http状态码
responseText         响应文件
```

## HTTP状态码：
```javascript
1XX 信息
2XX 成功
3XX 重定向    304(缓存)出缓存的场景 相同的get请求
4XX 客户端错误    403 没有权限 和 404 路径错误
5XX 服务端错误
```

## 使用Ajax发送get请求的步骤：
1. 创建一个ajax对象，获得XMLHttpRequest的实例对象
2. 使用open方法，建立请求
3. 使用send方法，发送请求
4. 设置readystatechange事件
```javascript
const xhr = new XMLHttpRequest(); // 创建ajax对象
xhr.open('get','./interface/helloworld.txt'); // 调用open
xhr.send(); // 调用send
xhr.onreadystatechange = function(){
	// 当xhr的状态码为4 且 http状态码为200的时候，可以处理数据
	if(xhr.readyState == 4 && xhr.status == 200){
		// xhr.responseText 返回的内容
		console.log(xhr.responseText 返回的内容);
	}
}
```

## 使用Ajax发送post请求的步骤：
```javascript
let json = {
	username:xxxx;
}
const xhr = new XMLHttpRequest();
xhr.open('post','./interface/hasuser-json.php');
xhr.setRequestHeader('.content-type','application/json;charset=utf-8');
xhr.send(JSON.stringify(json));
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		let data = JSON.parse(xhr.responseText);
	}
}
```
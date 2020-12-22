# PHP语法笔记
PHP每条语句的最后都需要加上分号
## 1. 创建PHP文件：
#### 1-1. 文件标记：
```php
<?php?>
```
#### 1-2. 文件头设置：
```php
header("content-type:text/html;charset=utf-8");
// 文件类型
// content-type:text/html 内容是html
// content-type:application/json 内容是json
```
## 2. 基本输出语句：
```php
echo 'hello world';
// 可用于输出数据结构
print_r($arr);
var_dump($arr);
```
## 3. 定义变量：
1. 定义变量时，不需要强制指定数据类型
2. 数据类型由赋值操作决定
3. 变量的命名规范，使用驼峰命名法
4. PHP中变量以$符号开头直接进行赋值
```php
$userName = '张三';
```
## 4. 字符串的相关操作：
1. 使用 . 操作符进行字符串连接
2. 可以使用单引号，也可以使用双引号
3. 双引号类似于JS中的模板字符串
```php
echo $userName . '你好';
echo '<br>';
echo "$userName 你好";
```
## 5. 数据类型检测：
```php
var_dump($userName); // 输出变量并输出数据类型
```
## 6. 循环结构：
1. for(...) {...}
2. while(boolean) {...}
3. do{...} while(boolean)
与JavaScript的语法相同，要注意变量的$符号都不能省略
## 7. 函数创建：
1. 使用驼峰命名法进行函数创建，不需要使用$进行命令
```php
function fn($num){
	echo $num;
}
fn(2);
```
## PHP中的数组语法：
在PHP数组中可以存放任何类型的值
#### 1. 索引数组
数组文档：https://www.php.net/manual/zh/book.array.php
最小索引是0    最大索引是-1
PHP数组没有length属性
语法：
```php
$arr = array(1,2,3,4,5);
echo count($arr); // 输出数组的长度
for($i=0;$i<count($arr);$i++){ // for循环遍历数组
	echo $arr[$i];
}
foreach($arr as $value){ // 类似于JS中的for-of
	echo $value;
}
$arr2 = array(1,23,44,54,345,234);
$arr3 = array_filter($arr2,function($elm){ // PHP中的数组过滤方法
	return $elm%2;
});
array_push($arr3,'ok');
```
#### 2. 关联数组
关联数组是由若干键值对组成的一种哈希(HASH)结构
语法类似于JS中的对象
```php
$user = array(
	'uaername' => 'zhangsan',
	'age' => 20,
	'sex' => 'nan'
);
$phone = array('phoneNumber' => 13888888888);
$result = array_merge($user,$phone); // 关联数组新增键值对
```
前后端数据交互：
```php
$json = json_encode($result); // 将php对象转换成json字符串
json_decode(jsonString); // 将json字符串转换成php对象 
```
#### 3. 混合数组
外层使用索引数字，内层使用关联数组
```php
$data = array( // 也可以转换成json字符串
	array(
		'product'=>'macbook'
	),
	array(
		'product'=>'iphone'
	),
	array(
		'product'=>'ipad'
	)
);
```
## 后端渲染：
#### 1. 动态网站
动态网站和服务器进行数据交互，如php，jsp，asp
需要通过web服务器访问，让web服务器通过后端语言将动态的文件(php，jsp，asp)翻译成html
#### 2. 静态网站
静态网站和服务器没有数据交互 html
不需要通过web服务器 浏览器认识html
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 你好世界 -->
    <?php
        $msg = 'hello world';
        $color = 'red';
    ?>
    <h1 style="color:<?php echo $color;?>"><?php echo $msg; ?></h1>
</body>
</html>
```
## 请求数据接收处理
```php
$_GET[] // 函数，用于接收前端发送的GET请求数据
$_POST[] // 函数，用于接收前端发送的POST请求数据
$_REQUEST[] // 函数，用于接收前端发送的GET/POST请求数据
```
GET与POST请求的区别：
1. GET请求的数据会出现在地址栏(search)部分 POST则不会显示
2. GET请求的数据大小有限 传输速递比较快
3. POST请求的数据大小没有限制 传输速度慢
4. GET请求的数据随请求头(header)发送，POST请求的数据随请求体(body)发送
5. 安全性：没有区别
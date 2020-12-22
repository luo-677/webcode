# PHP与数据库的交互流程：
### 1. 创建数据库配置块：
```php
$mysql_config=(
	'host'=>'localhost:3306', // 连接的地址和端口
	'db_user'=>'root', // 数据库连接的用户名
	'db_pass'=>'123456', // 数据库连接的密码
	'db'=>'h5_2011' // 数据库名称
)
```
### 2. 创建数据库连接：
```php
$mysqli = @new mysqli( // 使用mysqli创建数据库连接对象
						$mysql_config['host'],
						$mysql_config['db_user'],
						$mysql_config['db_pass']
					 );
					 
$mysqli = object(mysqli)#1 (19) { ["affected_rows"]=> int(0) ["client_info"]=> string(79) "mysqlnd 5.0.12-dev - 20150407 - $Id: 7cc7cc96e675f6d72e5cf0f267f48e167c2abb23 $" ["client_version"]=> int(50012) ["connect_errno"]=> int(0) ["connect_error"]=> NULL ["errno"]=> int(0) ["error"]=> string(0) "" ["error_list"]=> array(0) { } ["field_count"]=> int(0) ["host_info"]=> string(25) "localhost:3306 via TCP/IP" ["info"]=> NULL ["insert_id"]=> int(0) ["server_info"]=> string(6) "5.7.26" ["server_version"]=> int(50726) ["stat"]=> string(136) "Uptime: 33334 Threads: 1 Questions: 2244 Slow queries: 0 Opens: 161 Flush tables: 1 Open tables: 65 Queries per second avg: 0.067" ["sqlstate"]=> string(5) "00000" ["protocol_version"]=> int(10) ["thread_id"]=> int(409) ["warning_count"]=> int(0) }
```
### 3. 判断数据库连接是否正常：
通过$mysqli的返回值可以看出，数据库连接的错误代码为：["connect_error"]=> NULL
所以可以使用如下条件进行判断：

```php
if($mysqli->connect_error){ // 通过判断有没有报错生成进行分支处理
	die('连接错误'.$mysqli->connect_error); // die() 终止代码继续运行
}
```
### 4. 设置数据库查询字符集
```php
$mysqli->query('set names utf8'); // 否则无法进行字符集解析
```
### 5. 选择需要使用的数据库
```php
$select_db = $mysqli->select_db($mysql_config['db']);
// 如果数据库选择成功返回1，不成功则返回空
```
### 6. 检查数据库选择是否正常：
```php
if(!select_db){
	die('数据库选择错误'.$mysqli->error) // 数据库选择如果有报错则使用error
}
```
## 如上操作都没有问题的情况下，进行操作查询。
### 7. 创建sql语句进行查询操作
```php
$sql = 'select * from users'; // 创建sql语句
$result = $mysqli->query($sql); // 将sql语句进行传入查询，返回一个数据集合
$mysqli->close(); // 在每一次查询结束后，将数据库的连接关闭，节省资源
```
### 8. 对返回的数据进行处理
```php
$row = $result->fetch_assoc(); // 逐行进行数据提取，类似于exec()
while($row = $result->fetch_assoc()){
	// 可以将每一个字段提取出来，分别进行赋值
}
```
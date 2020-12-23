### web存储

### 运行环境
cookie         服务器环境 online
localStorage   服务器环境/离线环境   online/offline
sessionStorage 服务器环境 online

### 共同点
都是用于在客户端本地保存数据的技术
都存储在本地浏览器中
不能跨浏览器使用
可以在多个页面中实现数据共享和传输(相同的地址)
存储的数据都是键值对
存储的值 都是字符串
如果需要存储对象 将其转换成JSON格式 (JSON.stringify())

### 不同点
cookie 每个网站 可以使用最多50个cookie
ie6只能使用20个cookie
每个cookie的大小不超过 4kb  
cookie没有相关的操作API 需要自行封装

Storage 有统一的操作API
localStorage
存储大小 5MB
1MB = 1024KB
长期有效 需要手动清除或用户清除缓存

sessionStorage
存储大小 5MB
会话存储 一次会话结束会自动销毁数据


### 兼容问题
Storage 来自HTML5标准 存在兼容问题(低版本ie不兼容)
需要支持低版本ie  只能使用cookie
所有的移动端项目 都可以使用 Storage
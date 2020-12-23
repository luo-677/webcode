# 几大web存储的异同点

## 1. 运行环境：
1. cookie：服务器运行环境 online
2. localStorage：服务器环境 / 离线环境 online/offline
3. sessionStorage：服务器环境 online
## 2. 共同点：
1. 都是用于在客户端本地保存数据的技术
2. 都存储在本地浏览器中
3. 不能跨浏览器使用
4. 可以在多个页面中实现数据共享和传输(相同的地址)
5. 存储的数据都是键值对
6. 存储的值都是字符串
7. 如果需要存储对象，将其转换成JSON格式(JSON.stringify())
## 3. 不同点：
### cookie：
1. cookie在每个网站中最多可以使用50个
2. ie6只能使用20个cookie
3. 每个cookie的大小不超过4kb
4. cookie没有相关的API，需要自行封装
### Storage 有统一的操作API
### localStorage
1. 存储大小：5MB
2. 长期有效：需要手动清除缓存
### sessionStorage
1. 存储大小：5MB
2. 会话存储，一次会话结束会自动销毁数据
## 4. 兼容问题：
1. Storage 来自HTML5标准 存在兼容问题(低版本ie不兼容)
2. 需要支持低版本ie 只能使用 cookie
3. 所有的移动端项目 都可以使用 Storage
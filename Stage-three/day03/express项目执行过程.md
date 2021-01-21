# express项目执行过程
## 前后端不分离，编辑项目时只需要反过来写即可
1. npm start(将 node 改成 nodemon )
   - 使用npm命令进行项目启动，原理是调用了 package.json 文件中的 script 部分，直接指向 .bin/www 文件
2. bin/www
   1. 引入模块，内部模块和自定义模块
   2. 指定服务端口，默认为 3000
   3. 根据 app 文件创建 http 服务，此时指向 ../app.js
   4. 手动添加服务启动后返回内容
3. app.js --- 应用级中间件 --- 错误处理中间件
   1. 引入本地模块和自定义模块，主要是 routes 中的文件，此时指向 routes/*
   2. 使用 express 创建 app 实例
   3. 设置模板引擎路径
4. routes/* --- 路由中间件
   1. 引入 express 模块
   2. 创建 router 对象
   3. 使用 router 建立对应的请求，返回对应的 views/*.pug 数据
   4. 将 router 进行导出
5. views/*.pug
   1. 使用 extends 引入公共模块
   2. 在 block content 下面写入自定义信息

## 前后端分离

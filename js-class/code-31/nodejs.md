# nodejs

### JavaScript 是一个什么类型的语言？
弱类型 
脚本语言
解释型语言

### JavaScript运行在哪？
浏览器内核的JS引擎
JS引擎是单线程环境

### JavaScript的作用是什么？
渲染页面(DOM操作)
数据交互(AJAX JSONP)
数据验证

### JavaScript不能做什么？
数据库连接
文件和文件夹的操作
操作系统操作
进程操作

和语言强弱无关
由于运行环境特殊 保证用户和数据的安全 无法进行以上操作

### 编程语言的能力由什么决定？
运行环境(操作系统) Windows Linux Unix OSX ...

### 运行环境
计算机如何工作?
计算机需要执行用户的指令 指令就是由程序员编写的代码

软件(计算机的指令集合)
操作系统 
控制硬件工作 (BIOS basic input output system)
提供用户交互界面
软件是计算机的指令集合 运行在操作系统上 批量向计算机(操作系统)发送指令
软件可以由各种各样的编程语言编写 
计算机不认识编程语言
需要翻译(翻译的过程 叫做编译)
将计算机编程语言翻译成计算机能够识别的语言(机器语言)

编程语言 | 运行环境
--- | ---
JavaScript | JS引擎(查克拉 猴子 V8)
Java | Java虚拟机(Windows Linux Unix OSX)
C# | .NET(Windows) Mono(Linux)

跨平台(操作系统)
Node 它是JavaScript的运行环境(runtime) 
Node 可以运行在(Windows Linux Unix OSX)


https://nodejs.org/en/

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js 是一个JavaScript 运行环境 建立在 Chrome的V8 JavaScript 引擎上.
Node.js 采用了非阻塞的I/O模型

### JavaScript的组成
ECMAScript    语言核心 语言标准 ECMA-262标准
BOM           浏览器对象模型    让语言可以操作浏览器
DOM           文档对象模型      让语言可以操作文档

nodejs环境 是没有 DOM和BOM的

### 如果没有DOM和BOM JavaScript能做什么？
ECMAScript
变量定义 函数定义 关键字 保留字 语法 语句 表达式 运算符 分支结构 循环结构...
内置对象
Object Array Math String Number Boolean Date RegExp Set Map Symbol Promise ....

纯粹的编程语言

其他语言能做的事 它都能做

桌面应用
web后端
app后端
爬虫

### nodejs组成
Chrome's V8
ECMAScript
Libuv

### REPL环境
Read Eval Print Loop

退出REPL
.exit

### 全局对象
浏览器环境下 全局对象是 window
node环境下   全局对象是 global

### nodejs特点
nodejs采用 非阻塞 I/O 模型
采用回调的形式进行异步处理 
所有异步回调都是错误优先

基于Chrome's v8引擎 单线程

nodejs 应用场景

中间件开发

高并发

目前使用高并发处理的语言  golang (google)


### 终端命令
```bash
$ pwd 查看当前绝对路径

$ cd 改变目录

$ ls 查看当前目录
$ ls -l 以列表形式查看目录
$ ls -a 查看所有内容
$ ls -la 以列表形式查看所有内容
```

路径
相对路径
从当前文件目录开始计算路径
./

绝对路径
windows 操作系统 是从盘符开始
c:/
d:/ 
e:/

类unix(Unix Linux OSX) 操作系统
没有盘符概念  
绝对路径从根目录开始计算
/   根目录
~   Home目录(用户目录)
类Unix操作系统中 是没有文件后缀概念的

在类Unix操作系统中 所有以 . 开头的文件都是隐藏文件 

### nodejs模块化规范
nodejs 采用完全模块化进行设计
nodejs 采用的模块化规范是 common.js

common.js 的特点
每一个模块都拥有独立的作用域 代码在模块中不会造成全局污染
每一个模块都是一个独立的文件
模块允许多次加载 但是只在第一次加载时执行一次
运行结果会缓存 如果再次加载 则从缓存中获得结果
模块的加载顺序和代码书写顺序有关

1. 内置模块
2. 自定义模块
3. 第三方模块

定义模块使用
module.exports

加载模块使用
require()

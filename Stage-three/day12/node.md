# axios使用的两种方法
## 1.将axios赋值给Vue函数的原型，每一个被创建的实例对象直接继承axios方法
## 2.将axios赋值到根节点上，直接在main.js中暴露全局，各个组件使用this.$root.axios进行访问
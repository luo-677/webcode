import Vue from 'vue'
import App from './App.vue'
// 引入axios模块
import axios from 'axios'

Vue.config.productionTip = false // 控制台开发环境提示
// 将axios赋给vue原型的http属性
// Vue.prototype.$http = axios

// 实例化vue 创建root组件
new Vue({
  render: h => h(App), // 通过render函数来渲染组件，得到了虚拟dom对象结构
  data: {
    axios: axios,
  }
}).$mount('#app')

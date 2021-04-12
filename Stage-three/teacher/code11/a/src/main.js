import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 提示


// 组件库使用
import {  // todo 1. 先引入
  Button
} from 'vant'
Vue.use(Button)  // todo 2. 激活组件

// 实例化vue   创建root组件
new Vue({
  render: h => h(App), // 通过render函数来渲染组件，得到了虚拟dom对象结构
}).$mount('#app')

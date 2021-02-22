import Vue from 'vue'
import App from './App.vue'
// 导入的路径如果是一个目录，会自动寻找目录下的index文件，所以index可以省略不写
// 5. 导入router组件
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 6. 将router添加到Vue实例中，实现一个全局router，每一个组件都会直接进行继承，原型链
  router: router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
// Vue.prototype.$store = store;

new Vue({
  // 挂载完成后就会注入 $store 这个属性
  store,
  render: h => h(App),
}).$mount('#app')
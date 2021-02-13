import Vue from "vue";
import App from "./App.vue";
import axios from 'axios';
import qs from "qs";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

new Vue({
  render: h => h(App)
}).$mount("#app");

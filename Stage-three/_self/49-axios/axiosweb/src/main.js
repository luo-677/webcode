// 1. axios的基础用法
// 2. axios的并发请求
// 3. axios的实例用法
// 4. 封装axios方法
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

axios.defaults.baseURL = '/api';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios本身就能返回一个promise对象，所以可以直接使用promise方法
// axios 默认使用get方法

// 使用 axios.defaults 可以设置默认参数
// axios.defaults.baseURL=''

// 使用get请求时，传递params
// 使用post请求时，传递data

axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  // 使用method指定请求数据的方式
  method: 'get',
}).then(res=>{
  console.log(res);
})

axios({
  url: '/',
  params: {
    token: '',
    optimus_uuid: 'A647BD705B9B11EBBCFEEB67D9F3125990591C93BB5E42D7A94C2FED04F67431',
    optimus_risk_level: 71,
    optimus_code: 10
  }
}).then(res=>{
  console.log(res);
})

// axios的并发数据请求，当需要进行同时请求返回结果后才能进行操作时使用这个方法
axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    // 使用method指定请求数据的方式
    method: 'get',
  }),
  axios({
    url: '/',
    params: {
      token: '',
      optimus_uuid: 'A647BD705B9B11EBBCFEEB67D9F3125990591C93BB5E42D7A94C2FED04F67431',
      optimus_risk_level: 71,
      optimus_code: 10
    }
  })
]).then(res=>{
  console.log(res);
})

// 使用数组结构的方式直接对结果进行拆分
axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    // 使用method指定请求数据的方式
    method: 'get',
  }),
  axios({
    url: '/',
    params: {
      token: '',
      optimus_uuid: 'A647BD705B9B11EBBCFEEB67D9F3125990591C93BB5E42D7A94C2FED04F67431',
      optimus_risk_level: 71,
      optimus_code: 10
    }
  })
]).then(([res1,res2])=>{
  console.log(res1);
  console.log(res2);
})

// 使用axios创建实例
const axios1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000,
})

axios1({
  url: '/home/multidata',
}).then(res=>{
  res.msg = '实例请求数据';
  console.log(res);
})

import {axios2} from './network/Request';
// axios2({
//   url: '/home/multidata',
//   },
//   // 牢记箭头函数
//   success=>{
//     console.log(success);
//   },
//   fail=>{
//     console.log(fail);
//   }
// )
// axios2({
//   baseConfig: {
//     url: '/home/multidata',
//   },
//   // 牢记箭头函数
//   success(res){
//     console.log(res);
//   },
//   fail(res){
//     console.log(res);
//   }}
// )

// 使用promise对象进行封装
// axios2({
//   url: '/home/multidata',
// }).then(res=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// })

// 使用promise进化版
axios2({
  url: '/home/multidata',
}).then(res=>{
  console.log(res);
  // 使用请求拦截器之后会存在一个问题，返回的结果被拦截后就会触发错误操作
  // 使用响应拦截器之后会返回一个undefined
}).catch(err=>{
  console.log(err);
})
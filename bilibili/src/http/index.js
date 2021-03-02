import axios from 'axios';
import router from '../router'
import vue from 'vue'
const http = axios.create({
    baseURL: 'http://112.74.99.5:3000/web/api',
});

// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 拦截器，将每次发送的请求进行拦截，在处理过后再进行发送请求
    // 在这里设置请求头
    if(localStorage.getItem('id') && localStorage.getItem('token')){
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status == 401 || error.response.status == 402){
        router.push('/login');
        // 只有在vue实例中才能使用this进行指向
        vue.prototype.$msg.fail(error.response.data.message);
    }
    return Promise.reject(error);
  });

export default http;
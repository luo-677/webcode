// 考虑到后面请求实例的多样性，尽量将每种实例进行分开写
import axios from 'axios';
// 第一种：传三个参数
// export function axios2(config,success,fail){
//     const axios2 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000,
//     });
//     axios2(config).then(res=>{
//         success(res);
//     }).catch(res=>{
//         fail(res);
//     })
// }
// 第二种：传一个对象
// export function axios2(config){
//     const axios2 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000,
//     });
//     axios2(config.baseConfig).then(res=>{
//         config.success(res);
//     }).catch(res=>{
//         config.fail(res);
//     })
// }
// 第三种：使用promise
// export function axios2(config){
//     return new Promise((resolve,reject)=>{
//         const axios2 = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000,
//         });
//         axios2(config).then(res=>{
//             resolve(res);
//         }).catch(err=>{
//             reject(err);
//         })
//     })
// }
// 当后续框架不再进行维护时，只需要最终返回一个promise，就可以继续使用
// 第四种：promise进化版
export function axios2(config){
    const axios2 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000,
    });

    // 请求拦截
    axios2.interceptors.request.use(config=>{
        console.log(config);
        // 不返回的话就会触发错误操作
        // 使用请求拦截器的场景：
        // 1. 给服务器发送的请求数据中有一些不符合要求
        // 2. 比如在每次发送网络请求中,都希望在界面中展示一个请求的图标
        // 3. 某些网络请求(比如登录(token))，必须携带一些特殊的信息
        return config;
    },err=>{
        console.log(err);
    })

    // 响应拦截
    axios2.interceptors.response.use(config=>{
        console.log(config);
        return config.data;
    },err=>{
        console.log(err);
    })

    return axios2(config);
}
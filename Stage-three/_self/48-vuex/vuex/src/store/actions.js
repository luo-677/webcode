import {TEST_NAME} from '../type'
export default {
    // ES6新增对象写法
    [TEST_NAME](context, payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('updateInfo');
                console.log(payload);
                resolve('我是通过resolve传递的数据');
                reject('执行失败');
            },3000);
        })
    }
};
import Vue from 'vue';
import Vuex from 'vuex';

// 1. 安装插件
Vue.use(Vuex);

const ModuleA = {
    state: {
        name: 'lll',
    },
    mutations: {
        // 模块中的mutations中的方法只要正常进行调用就行
        updateName(state, payload){
            state.name = payload;
        }
    },
    actions: {
        // 两个context之间的区别
        asyncUpdateName(context,name){
            console.log(name);
            setTimeout(()=>{
                context.commit('updateName',name);
            },3000);
        }
    },
    getters: {
        fullName(state){
            return state.name + '111111';
        },
        fullName2(state,getters){
            return getters.fullName + '222222';
        },
        // 在模块中，getters中的函数可以接收三个，模块中的state和getters，还有根模块的state
        fullName3(state,getters,rootState){
            return getters.fullName2 + rootState.count;
        }
    }
}
// 当需要共享状态时，就在state中创建需要共享的状态
// 当需要修改状态时，就在mutations中创建对应的方法，在需要修改的操作中引入该方法即可
// 2. 创建对象
// 单一状态树
const store = new Vuex.Store({
    // 保存状态
    // 只要将属性加入到state中，这些属性都会被自动加入到响应式系统中，而响应式系统会监听属性的变化，当属性发生变化时，系统会通知所有使用这个属性的地方进行修改，界面进行刷新
    // 如果在state外部对属性进行了添加属性值的操作，那么添加的属性值并不会触发响应式监管，所以一定要在开始初始化的时候就要把数据写入其中。
    state: {
        count: 0,
        students: [
            {name: 'luo',age: 18},
            {name: 'lan',age: 19}
        ],
        info: {
            name: 'luo',
            age: 18,
            height: 1.88
        }
    },
    // 同步操作
    // vuex中store状态的唯一更新方式就是提交 Mutation
    mutations: {
        // 在store实例中创建方法
        // plus是事件类型，后面的是回调函数
        plus(state){
            state.count ++;
        },
        subtraction(state){
            state.count --;
        },
        // mutations中第一个参数就是state，不能进行变动，外界传进来的参数在后跟随即可
        // addself(state, counts){
        //     state.count += counts;
        // },
        // 当使用对象的方式进行数据传递时，payload就是一个对象，取数据需要将payload拆开取
        addself(state, payload){
            state.count += payload.counts;
        },
        addstudent(state, stu){
            state.students.push(stu);
        },
        updateInfo(state){
            // 只要是在state中初始化过的参数，就能实现响应式
            state.info.name = 'lan';
            // 但是如果操作是异步的，比如说延时，在vue插件中就无法进行追踪，插件中显示的还是原来的值
            // 所以在mutations中一定要使用同步方法，不要使用异步方法
            // setTimeout(()=>{
            //     state.info.name='lan';
            // },3000);
            // 数据可以正常进行添加，但是并不是响应式的，所以页面上的显示并不会自动修改
            // state.info['address'] = 'lsj';
            // Vue.set(state.info, 'address', 'lsj');\
            // delete无法做到响应式修改数据
            // delete state.info.age;
            // 这种方式就可以实现响应式修改
            // Vue.delete(state.info, 'age');
        }
    },
    // 异步操作，用于数据请求
    actions: {
        // aUpdateInfo(context, payload){
        //     setTimeout(()=>{
        //         context.commit('updateInfo');
        //         console.log(payload.message);
        //         payload.success();
        //     },3000);
        // },
        // context表示的是上下文，这里表示的是store这个对象，也就是this.$store
        aUpdateInfo(context, payload){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('updateInfo');
                    console.log(payload);
                    resolve('我是通过resolve传递的数据');
                    reject('执行失败');
                },3000);
            })
        }
    },
    // 相当于一个全局计算函数
    // getters的用法：当state中的状态数据需要进行修改之后再提供给外界，那么就通过getters中定义方法进行数据处理，外界通过$store.getters.way? 进行获取数据
    getters: {
        agemore18(state){
            return state.students.filter(el=>el.age>18);
        },
        // state参数必须要写上，内部引用的函数需要进行调用，且规定只接收这两个参数
        agemore18Length(state,getters){
            return getters.agemore18.length;
        },
        agemoreage(state){
            return function(age){
                return state.students.filter(el=>el.age>age);
            }
        }
    },
    modules: {
        a: ModuleA,
    }
});

// 3. 导出store对象
export default store;
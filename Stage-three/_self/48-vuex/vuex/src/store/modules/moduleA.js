// 获取模块中的数据，需要通过模块的名称进行获取，模块在编译完成后也是被放在了state中
// 在执行动作时，会优先寻找最外面的mutations中有没有对应的方法，如果没有，才会到模块中去寻找，一般来说名字都是唯一的
export default {
    state: {
        name: 'lll',
    },
    mutations: {
        updateName(state, payload){
            state.name = payload;
        }
    },
    actions: {
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
        fullName3(state,getters,rootState){
            return getters.fullName2 + rootState.count;
        }
    }
};
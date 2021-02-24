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
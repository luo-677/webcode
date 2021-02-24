import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import moduleA from './modules/moduleA';

const state = {
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
};

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA,
    }
});

export default store;
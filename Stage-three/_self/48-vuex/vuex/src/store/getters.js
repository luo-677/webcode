export default {
    agemore18(state){
        return state.students.filter(el=>el.age>18);
    },
    agemore18Length(state,getters){
        return getters.agemore18.length;
    },
    agemoreage(state){
        return function(age){
            return state.students.filter(el=>el.age>age);
        }
    }
};
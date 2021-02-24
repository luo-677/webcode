export default {
    plus(state){
        state.count ++;
    },
    subtraction(state){
        state.count --;
    },
    addself(state, payload){
        state.count += payload.counts;
    },
    addstudent(state, stu){
        state.students.push(stu);
    },
    updateInfo(state){
        state.info.name = 'lan';
    }
};
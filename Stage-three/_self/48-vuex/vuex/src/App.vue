<template>
  <div id="app">
    <p>{{msg}}</p>
    <!-- 直接在当前组件中修改状态参数这种方式非常不友好，因为它不符合vue的数据流程规定，数据变化的各个阶段无法进行跟踪 -->
    <p>{{$store.state.count}}</p>
    <p>{{$store.state.info}}</p>
    <button @click="add">+</button>
    <button @click="decrease">-</button>
    <button @click='updateInfo'>添加信息</button>
    <p>{{$store.getters.agemore18}}</p>
    <p>{{$store.getters.agemore18Length}}</p>
    <p>{{$store.getters.agemoreage(17)}}</p>
    <button @click="addself(5)">+5</button>
    <button @click="addself(10)">+10</button>
    <button @click='addstudent'>addstudent</button>
    <hello-world></hello-world>

    <p>------modules中的数据------</p>
    <!-- 获取模块中的数据，需要通过模块的名称进行获取，模块在编译完成后也是被放在了state中 -->
    <p>{{$store.state.a.name}}</p>
    <button @click='updateName'>修改模块中的名字</button>
    <!-- 模块中的getters的方法也是直接调用即可 -->
    <p>{{$store.getters.fullName}}</p>
    <p>{{$store.getters.fullName2}}</p>
    <p>{{$store.getters.fullName3}}</p>
    <button @click='asyncUpdateName("wangwu")'>异步修改模块中的名字</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
// 单页面的状态管理，State(状态) => View(视图层) => Actions(用户的操作)
export default {
  name: 'App',
  data(){
    return{
      msg: "我是组件app",
      // count: 0,
    }
  },
  methods: {
    // 使用this.$store.commit()去引用实例中的方法
    add(){
      this.$store.commit('plus');
    },
    decrease(){
      this.$store.commit('subtraction');
    },
    // 在调用store中的mutations中的方法时，如果需要传递参数，则在commit中跟随传递即可，可以直接传递给mutations
    // counts这种参数是 payload负载
    // 这是普通写法
    // addself(counts){
    //   this.$store.commit('addself', counts);
    // },
    // 这是对象写法
    addself(counts){
      this.$store.commit({
        type: 'addself',
        counts,
      })
    },
    addstudent(){
      const stu = {name: 'chen', age: 25};
      this.$store.commit('addstudent', stu);
    },
    updateInfo(){
      // this.$store.commit('updateInfo');
      // 使用dispatch去调用actions中的异步操作
      // 下列写法将数据和方法写在了一个对象中，不优雅
      // this.$store.dispatch('aUpdateInfo',{
      //   message: '我是携带的信息',
      //   success: ()=>{
      //     console.log('操作已经完成');
      //   }
      // });
      // this.$store.dispatch生成的就是调用方法后产生的结果
      this.$store.dispatch('aUpdateInfo','我是携带的信息')
        .then(res=>{
          console.log('里面完成了提交');
          console.log(res);
        });
      console.log('信息已触发');
    },
    // 在执行动作时，会优先寻找最外面的mutations中有没有对应的方法，如果没有，才会到模块中去寻找，一般来说名字都是唯一的
    updateName(){
      this.$store.commit('updateName','aaa');
    },
    asyncUpdateName(name){
      console.log(name);
      this.$store.dispatch('asyncUpdateName',name);
    }
  },
  components: {
    HelloWorld,
  }
}
</script>

<style>

</style>
<template>
  <div id="app">
    {{ msg }}
    <!-- 标签的写法要注意 -->
    <hello-world></hello-world>
    <!-- 数据渲染一定要使用key值 -->
    <p v-for="(item,index) in list" :key="index">{{ item.weather }}</p>
    <button @click="getData">请求数据</button> 
  </div>
</template>

<script>
// 1. 引入组件
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App', // 规定组件在vue devtools中显示的名称
  components: { // 2. 组件注册
    HelloWorld
  },
  data(){
    return{
      msg: "msg",
      list: [],
    }
  },
  methods: {
    getData(){
      // 方法一：
      // this.$http.get('http://api.k780.com',{
      //   params:{
      //     app: 'weather.future',
      //     weaid: 'hangzhou',
      //     appkey: '56372',
      //     sign: '928d43bf215b3759878a224cc7721def',
      //     format: 'json',
      //   }
      // }).then((res) => {
      //   console.log(res);
      //   // axios对返回的数据做了一层封装，res.data才是我们需要的数据
      //   this.list = res.data.result;
      //   console.log(this.list);
      // }).catch((err) => {
      //   Promise.reject(err);
      // });
      // 方法二：
      this.$root.axios({
        url: 'http://api.k780.com',
        methods: 'GET',
        params: {
          app: 'weather.future',
          weaid: 'hangzhou',
          appkey: '56372',
          sign: '928d43bf215b3759878a224cc7721def',
          format: 'json',
        }
      }).then((res) => {
        this.list = res.data.result;
      }).catch((err) => {
        Promise.reject(err);
      });
    }
  },
}
</script>

// stylus语法，将符号都省略
// <style lang="stylus"> 
//   .box
//     width 100px
//     height 100px
//     background red
// </style>

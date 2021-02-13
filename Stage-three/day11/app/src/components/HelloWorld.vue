// 单个组件都有固定编写格式，template，script，style
<template>
  <div class="box">
    helloworld
    <p v-for="(item,index) in list" :key="index">{{ item.weather }}</p>
    <button @click="getData">请求数据</button>
  </div>
</template>

<script>
export default {
  name: "aa",
  data(){
    return{
      msd: "msd",
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

// <style lang="stylus" scope>
//   .box
//     width 100px
//     height 100px
//     background red
// </style>

<style lang="scss">
  .box{
    width: 100px;
    height: 100px;
    background: green;
  }
</style>
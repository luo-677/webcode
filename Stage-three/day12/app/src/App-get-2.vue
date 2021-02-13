// 1.组件模板
<template>
  <div id="app">
    {{ msg }}
    <button @click="get">获取数据</button>
  </div>
</template>

// 2.js部分
<script>
export default {
  name: "root-APP",
  data(){
    return{
      msg: 'root-app',
    }
  },
  methods: {
    get(){
      // axios(options)
      this.$axios({
        url: 'http://api.k780.com',
        method: 'get',
        params: {
        app: 'weather.future',
        weaid: 'hangzhou',
        appkey: '56372',
        sign: '928d43bf215b3759878a224cc7721def',
        format: 'json',
        }
      }
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        Promise.reject(err);
      });
    }
  },
}
</script>
// 3.style部分
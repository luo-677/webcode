// 1.组件模板
<template>
  <div id="app">
    {{ msg }}
    <button @click="post">获取数据</button>
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
    post(){
      // axios.post(url,data,options[用于指定是否需要修改头信息])
      this.$axios.post('http://api.k780.com',this.$qs.stringify({
        app: 'weather.future',
        weaid: 'hangzhou',
        appkey: '56372',
        sign: '928d43bf215b3759878a224cc7721def',
        format: 'json',
      })
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
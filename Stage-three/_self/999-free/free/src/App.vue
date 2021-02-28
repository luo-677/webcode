<template>
  <div id="app">
    <ul>
      <!-- <router-link to="/home" tag="li">home</router-link>
      <router-link to="/file" tag="li">file</router-link>
      <router-link to="/about" tag="li">about</router-link> -->
      <router-link to="/home" tag="li">电影</router-link>
      <router-link to="/file" tag="li">资讯</router-link>
      <router-link to="/about" tag="li">我的</router-link>
    </ul>
    <ul>
      <li v-for="data in dataList" :key="data.filmId">{{data.name}}</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      dataList: [],
    }
  },
  mounted() {
    this.$http({
      url: 'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=694811',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1614492356572501960687617","bc":"330100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      this.dataList = res.data.data.films;
      console.log(this.dataList);
    }).catch(err=>{
      console.log(err);
    })
  },
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
  li{
    list-style-type: none;
  }
</style>
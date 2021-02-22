<template>
  <div id="app">
    <p>这是Vue</p>
    <!-- 7. 使用vue自带的两个组件进行展示 -->
    <!-- router-link 最终会被渲染成 a 标签 -->
    <!-- router-link 中有一个 tag 属性，可以用于修改标签的渲染形式 -->
    <!-- replace 属性可以不生成历史信息 -->
    <!-- active-class 可以自定义激活状态时对应的class名称 -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- active-class 可以进行统一修改 -->
    <!-- 使用 router-link 不会产生路由重复 -->
    <router-link to="/home/news" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!-- 按钮会产生路由重复 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <!-- 创建动态路由 3. 在标签中绑定动态路由参数 -->
    <!-- 使用params简单数据的方式进行传递数据 -->
    <router-link :to="'/user/' + userId" tag="button" replace>我的</router-link>
    <!-- <router-link to="/profile" tag="button" replace>档案</router-link> -->

    <!-- 以query对象的方式进行数据传输，可从主入口将数据绑定到组件中进行展示 -->
    <router-link :to="{path: '/profile', query: {name: name, age: age}}" tag="button" replace>档案</router-link>
    <!-- <button @click="profileClick">档案</button> -->
    <!-- router-view 用于展示路由中的内容 -->
    <!-- keep-alive组件要与 activated 和 deactivated 联合使用 -->
    <!-- keep-alive 使组件保活，不会进行频繁创建销毁 -->
    <!-- 使用exclude属性进行排除时，不能使用空格进行隔开，否则会报错 -->
    <keep-alive exclude="User,Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    // 创建动态路由 2. 创建动态路由数据
    return {
      userId: 'lisi',
      name: 'luo',
      age: 18
    }
  },
  methods: {
    homeClick(){
      // 在 router 实例创建的时候，vue会自动将 $router 注入到每一个组件中
      // 在vue中进行修改，一定要通过vue提供的方法进行，不能自行使用history进行修改
      // this.$router.push('/home');
      // $router就是创建的router实例
      this.$router.replace('/home');
    },
    aboutClick(){
      // this.$router.push('/about');
      this.$router.replace('/about');
    },
    profileClick(){
      // 如何使用捕获错误的方式进行修正错误
      this.$router.push({
        path: '/profile',
        query: {
          name: this.name,
          age: this.age,
          // 加上一个时间戳，防止请求相同而产生报错
          // time: new Date().getTime()
        }
        // 使用错误捕获的方式也可以进行错误规避
      }).catch(err=>err);
    }
  },
}
</script>

<style lang="stylus">
.active{
  color: red;
}
</style>

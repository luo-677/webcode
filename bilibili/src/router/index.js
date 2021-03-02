import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import UserInfo from '../views/UserInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/userinfo',
    component: UserInfo
  }
]

const router = new VueRouter({
  routes
})

// 使用全局路由守卫对路由跳转进行拦截，主要是针对PC端，但是这样的话会让每一个页面都进行判断，有一些页面并不需要拦截
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('id')&&localStorage.getItem('token')){
    next();
  }
  router.push('/login');
})

export default router

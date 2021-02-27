import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import File from '../views/File'
import HomePage1 from '../views/Home/Home_page1'
import HomePage2 from '../views/Home/Home_page2'
import Detail1 from '../views/Home/Detail/Detail1'

Vue.use(VueRouter)


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'home_page1',
      },
      {
        path: 'home_page1',
        component: HomePage1,
      },
      {
        path: 'home_page2',
        component: HomePage2,
      },
    ]
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/file',
    component: File,
  },
  {
    path: '/detail1/:id',
    component: Detail1,
  },
  {
    path: "*",
    redirect: '/home',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

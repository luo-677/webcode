// 1. 引入路由包
import VueRouter from 'vue-router';

// 2. 通过Vue.use(插件)，安装插件
import Vue from 'vue';
Vue.use(VueRouter);

// 3. 创建VueRouter对象
// 配置路由和组件之间的应用关系
// 导入组件
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载，只有在请求某个具体的页面时才会触发，使用的是异步的原理
const Home = ()=>import('../components/Home');
const About = ()=>import('../components/About');
const User = ()=>import('../components/User');

// 路由嵌套，同样是将子模块进行导入
const HomeNews = ()=>import('../components/HomeNews');
const HomeMsg = ()=>import('../components/HomeMsg');
const Profile = ()=>import('../components/Profile');

// 创建router对象时，里面的隐射表的对象名称一定要是routes
const routes = [
    // 在书写代码时，尽量把特殊的代码块写在显眼的地方，比如开头
    {
        path: '',
        // redirect重定向，当项目启动打开入口页面时，直接指向重定向地址
        redirect: '/home',
    },
    {
        path: "/home",
        component: Home,
        meta: {
            title: "首页",
        },
        // 哪个模块的子模块，就写在哪个模块下面，children是一个数组
        children: [
            // 增加默认展示信息，用户体验更加友好
            // 使用默认值会产生一个问题，无法记录历史信息
            // {
            //     path: '',
            //     redirect: 'news',
            // },
            {
                path: 'news',
                component: HomeNews,
                meta: {
                    title: "新闻",
                },
            },
            {
                path: 'msg',
                component: HomeMsg,
                meta: {
                    title: "消息",
                },
            },
        ]
    },
    {
        path: "/about",
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        // 创建动态路由 1. 在path中预留变量
        path: '/user/:userId',
        component: User,
        meta: {
            title: "用户",
        },
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: "档案",
        },
    }
];
const router = new VueRouter({
    routes,
    // 修改地址栏显示的模式，默认为hash模式，会有#，可以手动修改成history模式
    mode: "history",
    // 统一修改激活的组件class名
    linkActiveClass: "active",
})

// 使用声明周期也可以实现，但是需要在每个组件上都写上生命周期函数，不方便维护
// 路由守卫
// beforeEach 和 afterEach 是全局守卫，只要是有发生跳转，就一定会触发这两个函数
// next({path: '/login'})可以用作条件检测，一旦不符合可以进行指定跳转
// 前置守卫(回调函数) 在跳转之前就完成的操作
router.beforeEach((to,from,next)=>{
    // 在有嵌套路由的时候，需要对路由的层数进行判断，才能知道对应的路由具体是哪一个
    if(to.matched.length>1){
        document.title = to.matched[1].meta.title;
    }else{
        document.title = to.matched[0].meta.title;
    }
    console.log(to.matched.length)
    // 跳转完成前要跳转到的对象
    console.log(to);
    // 跳转完成前跳转过来的对象
    console.log(from);
    // 一定要使用next方法进行下一步，否则就会停留在当前位置
    next();
})

// 后置钩子(回调函数) 在跳转之后完成的操作
router.afterEach((to,from)=>{
    // 跳转完成后达到的对象
    console.log(to);
    // 跳转完成后跳转过来的对象
    console.log(from);
})

// 路由独享守卫，就是在配置路由表时，每一个路由独立的路由守卫，只能自己进行触发
// beforeEnter: (to,from,next)=>{}

// 组件守卫

// 4. 将router对象传入到Vue实例中
export default router;
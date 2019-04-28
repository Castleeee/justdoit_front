import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component (resolve) { require(['./views/Home.vue'], resolve) }
    },
    // user 相关路由
    //
    {
      path: '/Login',
      name: 'login',
      component (resolve) { require(['./components/user/Login.vue'], resolve) }
    },
    {
      path: '/usercenter',
      name: 'userCenter',
      component (resolve) { require([], resolve) } // todo 用户资料中心
    },
    // todo相关路由
    //
    {
      path: '/todo',
      name: 'todoMain',
      component (resolve) { require(['./components/todo/todoMain.vue'], resolve) }
    },
    {
      path: '/todo/today',
      name: 'todoToday',
      component (resolve) { require(['./components/todo/todoToday.vue'], resolve) }
    },
    {
      path: '/todo/chart',
      name: 'todoChart',
      component (resolve) { require(['./components/todo/todoChart.vue'], resolve) }
    },
    // word 相关路由
    //
    {
      path: '/word',
      name: 'wordMain',
      component (resolve) { require(['./components/word/wordMain.vue'], resolve) }
    },
    {
      path: '/word/today',
      name: 'wordToday',
      component (resolve) { require(['./components/word/wordToday.vue'], resolve) }
    },
    {
      path: '/word/mine',
      name: 'wordMine',
      component (resolve) { require(['./components/word/wordMine'], resolve) }
    },
    // info 相关路由
    //
    {
      path: '/info',
      name: 'infoMain',
      component (resolve) { require(['./components/infostream/infoMain.vue'], resolve) }
    },
    {
      path: '/info/today',
      name: 'infoToday',
      component (resolve) { require(['./components/infostream/infoToday.vue'], resolve) }
    },
    {
      path: '/info/custom',
      name: 'custom',
      component (resolve) { require(['./components/infostream/infoCustom.vue'], resolve) }
    },
    // 其他路由
    //
    {
      path: '/appdown',
      name: 'appDownload',
      component (resolve) { require(['./components/appDownload.vue'], resolve) }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

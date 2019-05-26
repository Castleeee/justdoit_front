import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component (resolve) { require(['./views/Home.vue'], resolve) }
    },
    // user 相关路由
    //
    {
      path: '/findback',
      name: 'findback',
      component (resolve) { require(['./components/user/findback.vue'], resolve) }
    },
    {
      path: '/Login',
      name: 'login',
      // beforeEnter: (to, from, next) => {
      //   var token = sessionStorage.getItem('token')
      //   if (token !== '') {
      //     console.log('router worked')
      //     next({
      //       path: '/',
      //       query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      //     })
      //     Vue.prototype.$LoadingBar.finish()
      //   }
      // },
      component (resolve) {
        require(['./components/user/Login.vue'], resolve)
      }

    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component (resolve) { require(['./components/user/usercenter.vue'], resolve) },
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }// todo 用户资料中心cmd

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

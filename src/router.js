import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import appDownload from './components/appDownload.vue'

import Login from './components/user/Login.vue'

import todoMain from './components/todo/todoMain.vue'
import todoToday from './components/todo/todoToday.vue'
import todoChart from './components/todo/todoChart.vue'

import wordMain from './components/word/wordMain.vue'
import wordToday from './components/word/wordToday.vue'
import wordMine from './components/word/wordMine'

import infoMain from './components/infostream/infoMain.vue'
import infoToday from './components/infostream/infoToday.vue'
import infoCustom from './components/infostream/infoCustom.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // user 相关路由
    //
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: Login // todo 用户资料中心
    },
    // todo相关路由
    //
    {
      path: '/todo',
      name: 'todo',
      component: todoMain
    },
    {
      path: '/todo/today',
      name: 'todo',
      component: todoToday
    },
    {
      path: '/todo/chart',
      name: 'todoChart',
      component: todoChart
    },
    // word 相关路由
    //
    {
      path: '/word',
      name: 'word',
      component: wordMain
    },
    {
      path: '/word/today',
      name: 'wordToday',
      component: wordToday
    },
    {
      path: '/word/mine',
      name: 'wordMine',
      component: wordMine
    },
    // info 相关路由
    //
    {
      path: '/info',
      name: 'info',
      component: infoMain
    },
    {
      path: '/info/today',
      name: 'infoToday',
      component: infoToday
    },
    {
      path: '/info/custom',
      name: 'custom',
      component: infoCustom
    },
    // 其他路由
    //
    {
      path: '/appdown',
      name: 'appDownload',
      component: appDownload
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

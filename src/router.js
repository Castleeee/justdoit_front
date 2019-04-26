import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './components/user/Login.vue'

import todoMain from './components/todo/todoMain.vue'
import todoToday from './components/todo/todoToday.vue'

import wordMain from './components/word/wordMain.vue'
import wordToday from './components/word/wordToday.vue'

import infoMain from './components/infostream/infoMain.vue'
import infoToday from './components/infostream/infoToday.vue'

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
      component: Login
    },
    // todo 相关路由
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
    // word 相关路由
    //
    {
      path: '/word',
      name: 'word',
      component: wordMain
    },
    {
      path: '/word/today',
      name: 'word',
      component: wordToday
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
      name: 'info',
      component: infoToday
    },
    // 其他路由
    //
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

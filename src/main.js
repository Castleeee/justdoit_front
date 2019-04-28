import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iview
import './plugins/iview.js'
// 添加axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 添加动效
import 'vue2-animate/dist/vue2-animate.min.css'

// 添加echarts
import echarts from 'echarts'

// 生产环境请注释mock语句
import './mock/index.js'
// axios.defaults.headers.post['X-CSRFToken'] = getCookie('csrftoken')

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
  // 预渲染
  // mounted () {
  //   document.dispatchEvent(new Event('render-event'))
  // }
}).$mount('#app')

//
// cookie操作
//
// function getCookie (name) {
//   var arr; var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
//   if (arr = document.cookie.match(reg)) { return unescape(arr[2]) } else { return null }
// }

// function setCookie (name, value, days) {
//   var exp = new Date()
//   exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
//   document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
// }

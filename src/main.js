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
// 美化滚动条
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

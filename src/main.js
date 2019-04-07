import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 生产环境注释mock语句
import './mock/index.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

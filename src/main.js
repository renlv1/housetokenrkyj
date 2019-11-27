/* eslint-disable no-new */
import Vue from 'vue'
import router from './router'
// import axios from 'axios'
import 'babel-polyfill' // 兼容ie
import 'animate.css' // 动画
import App from './App'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { i18n } from './i18n/config'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// 引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 这个样式必须引入

// axios.defaults.withCredentials = true // 存cookie

// Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
// Vue.prototype.$http = axios
const lang = window.localStorage.getItem('lang') || 'cn'
Vue.prototype.$lang = lang.toLowerCase()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

// 进度条
NProgress.configure({
  showSpinner: false,
  minimum: 0.6,
  easing: 'ease',
  speed: 200
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  NProgress.done()
})

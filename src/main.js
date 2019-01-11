// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

// 组件
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

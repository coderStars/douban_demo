import Vue from 'vue'
import App from './App.vue'
import router from '@/router' 
import store from './store/index'
import "swiper/css/swiper.min.css";
import getImages from '@/utils/getImgUrl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

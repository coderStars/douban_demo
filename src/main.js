import Vue from 'vue'
import App from './App.vue'
import router from '@/router' 
import store from './store/index'
import "swiper/css/swiper.min.css";
<<<<<<< HEAD
import getImages from '@/utils/getImgUrl'
=======

import Header from '@/components/Header/Header.vue'
import Search from '@/components/Search/Search.vue'
import Footer from '@/components/Footer/Footer.vue'

Vue.component('Header',Header)
Vue.component('Search',Search)
Vue.component('Footer',Footer)
>>>>>>> 6ba21039ecbaa88c1b9e25ae22f4b46d472ef88d

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

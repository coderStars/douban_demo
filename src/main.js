import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store/index'
import "swiper/css/swiper.min.css";
import getImages from '@/utils/getImgUrl'



import Header from '@/components/Header/Header.vue'
import Search from '@/components/Search/Search.vue'
import Footer from '@/components/Footer/Footer.vue'


Vue.component('Header',Header)
Vue.component('Search',Search)
Vue.component('Footer',Footer)

import {MessageBox,Message,Pagination,Checkbox,Button} from 'element-ui'



Vue.use(Checkbox)
Vue.use(Pagination)
Vue.use(Button)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;  //用来提示错误信息，更漂亮

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from '@/src/router' 
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

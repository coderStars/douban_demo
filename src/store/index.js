//1、引入并声明使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './user'
import books from './books'


//2、向外暴露一个Store对象
export default new Vuex.Store({
  modules:{
    user,
    books
  }
})


//3、注入这个创建的store对象  在vue当中




//1、引入并声明使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './user'
import cart from './cart'
import books from './books'

import city from './city'
//存数据的地方，多个属性的对象

//2、向外暴露一个Store对象
export default new Vuex.Store({
  modules:{
    user,
    city,
    cart,
    books
  }
})


//3、注入这个创建的store对象  在vue当中




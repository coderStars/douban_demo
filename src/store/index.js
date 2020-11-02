//1、引入并声明使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



//存数据的地方，多个属性的对象
const state = {

}

//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {}


//2、向外暴露一个Store对象
export default new Vuex.Store({
  modules:{
  }
})


//3、注入这个创建的store对象  在vue当中




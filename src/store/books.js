import {getBooksClassification} from '@/api/books'
//存数据的地方，多个属性的对象
const state = {
    booksClassification: {}
  }
  
  //直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
  const mutations = {
      RECEVIEBOOKSCLASSIFICATIONDATA(state,booksClassification){
        state.booksClassification = booksClassification
    }
  }
  
  
  //和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
  const actions = {
    async getBooksClassification({commit}){
        const result = await getBooksClassification()
        commit('RECEVIEBOOKSCLASSIFICATIONDATA',result)
    }
  }
  
  //通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
  const getters = {}
  
  
  export default  {
    state,
    mutations,
    actions,
    getters
  }
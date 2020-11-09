import Vue from 'vue'
//存数据的地方，多个属性的对象
const state = {
  cartInfoList: []
}

//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
  addCartList(state, cartInfo) {
    let cartItem = state.cartInfoList.find(item => item.id === cartInfo.id)
    if (cartItem) {
      cartItem.skuNum += 1
    } else {
      Vue.set(cartInfo, 'skuNum', 1)
      state.cartInfoList.push(cartInfo)
    }
  },
  // 修改购物车
  changeCartList(state, cartList){
    state.cartInfoList = cartList;
  },
  // 购物车商品数量加减
  updateSkuNum(state, {
    id,
    disNum
  }) {
    const itemIndex = state.cartInfoList.findIndex(item => item.id === id)
    if (state.cartInfoList[itemIndex].skuNum <= 1 && disNum === -1) {
      state.cartInfoList[itemIndex].skuNum = 1
    } else {
      state.cartInfoList[itemIndex].skuNum += disNum
    }
  },
  //删除购物车里的摸个商品
  delCartList(state, id) {
    const itemIndex = state.cartInfoList.findIndex(item => item.id === id)
    if (window.confirm('您确定要删除所有选中的商品吗')) {
      state.cartInfoList.splice(itemIndex, 1)
    }
  },
  // 全选
  allChecked(state) {
    const result = state.cartInfoList.every(item => item.isChecked === true)
    if (result) {
      state.cartInfoList.map(item => item.isChecked = false)
    } else {
      state.cartInfoList.map(item => item.isChecked = true)
    }
  }

}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {

}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {
  // 全选
  allSelect(state) {
    const result = state.cartInfoList.every(item => item.isChecked === true) && state.cartInfoList.length > 0
    return result
  },
  allSkuNum(state){
    const result = state.cartInfoList.reduce((prev,item) => prev += item.skuNum,0)
    return result || 0
    
  }

}


export default {
  state,
  mutations,
  actions,
  getters
}
//存数据的地方，多个属性的对象
const state = {
  cartInfo: [
    {
    "id": 1,
    "skuId": 1,
    "skuNum": 1,
    "imgUrl": "https://img9.doubanio.com/view/dianpu_product_item/small/public/p25415975.jpg",
    "skuName": "仿制药的真相",
    "isChecked": true,
    "skuPrice": 49.0
  }, 
    {
    "id": 2,
    "skuId": 2,
    "skuNum": 1,
    "imgUrl": "https://img9.doubanio.com/view/dianpu_product_item/small/public/p25415955.jpg",
    "skuName": "我的思想与观念 ：爱因斯坦自选集",
    "isChecked": true,
    "skuPrice": 35.0
  }, 
    {
    "id": 3,
    "skuId": 3,
    "skuNum": 1,
    "imgUrl": "https://img1.doubanio.com/view/dianpu_product_item/small/public/p25414357.jpg",
    "skuName": "极乐鸟与蜗牛",
    "isChecked": true,
    "skuPrice": 46.0
  }, 
    {
    "id": 4,
    "skuId": 4,
    "skuNum": 1,
    "imgUrl": "https://img1.doubanio.com/view/dianpu_product_item/small/public/p25414348.jpg",
    "skuName": "当我们谈论爱情时我们在谈论什么",
    "isChecked": true,
    "skuPrice": 55
  }, 
]
}

//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
  receiveCartInfo(state, cartInfo) {
    state.cartInfo = cartInfo
  }
}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
  addOrDeleCart({
    commit
  }, data) {
    commit()
  }
}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}
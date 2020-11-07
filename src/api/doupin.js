import request from '@/network/request'

//全部商品接口
export const getAllShopDataList = () => {
  return request({
    url: '/getAllShopDataList',
    method: 'get'
  })
}


//豆品主页接口
export const getMaindoupinDataList = () => {
  return request({
    url: '/getMaindoupinDataList',
    method: 'get'
  })
  
}
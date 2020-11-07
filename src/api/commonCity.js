import request from '@/network/request'

//获取同城演出的数据
export const getCommonCityShowDetail = (id) => {
  return request({
    url: `/commonCity?id=${id}`,
    method: 'get'
  })
}

//获取同城home数据
export const getCommonCityData = () => {
  return request({
    url:'/commonCityData',
    method:'get'
  })
}




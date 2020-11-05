import request from '@/network/request'

//获取同城演出的数据
export const getCommonCityShowDetail = (id) => {
  return request({
    url: `/commonCity/${id}`,
    method: 'get'
  })
}


import request from '@/network/request'

export const getBookHotList = () => {
  return request({
    url: '/getBookHotList',
    method: 'get',
  })
}

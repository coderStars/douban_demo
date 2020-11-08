import request from '@/network/request'

export const getBookHotList = () => {
  return request({
    url: '/getBookHotList',
    method: 'get',
  })
}

export const getNewsBooksList = ()=>{
  return request({
    url:'/getNewsBooksList',
    method:'get',
  })
}
// 获取书分类详情页
export const getBooksClassification = ()=>{
  return request({
    url:'/getBooksClassification',
    method:'get'
  })
}

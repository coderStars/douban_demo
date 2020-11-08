import request from '@/network/request_official'

export const getMusicSearchInfo = (params) => {
  return request({
    url: '/search',
    method: 'get',
    params
  })
}
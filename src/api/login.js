import request from '@/network/request'

export const getRequestPhone = (data) => {
  return request({
    url: '/digits',
    method: 'post',
    data
  })
}

export const getLoginVerify = (data) => {
  return request({
    url: '/getVerifyUser',
    method: 'post',
    data
  })
}

export const getVerifyUserCode = (data) => {
  return request({
    url: '/getVerifyUserCode',
    method: 'post',
    data
  })
}
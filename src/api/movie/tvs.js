import request from '@/network/request'

export const getTvHot = () => {
  return request({
    url: '/getTvHot',
    method: 'get'
  })
}

export const getTvCh = () => {
  return request({
    url: '/getTvCh',
    method: 'get'
  })
}

export const getTvZh = () => {
  return request({
    url: '/getTvZh',
    method: 'get'
  })
}

export const getTvTus = () => {
  return request({
    url: '/getTvTus',
    method: 'get'
  })
}

export const getTvJan = () => {
  return request({
    url: '/getTvJan',
    method: 'get'
  })
}

export const getTvKor = () => {
  return request({
    url: '/getTvJan',
    method: 'get'
  })
}

export const getTvAni = () => {
  return request({
    url: '/getTvJan',
    method: 'get'
  })
}

export const getTvRec = () => {
  return request({
    url: '/getTvRec',
    method: 'get'
  })
}

import request from '@/network/request'

export const getTag = () => {
  return request({
    url: '/getTag',
    method: 'get'
  })
}

export const getMovieTag = () => {
  return request({
    url: '/getMovieTag',
    method: 'get'
  })
}

export const getTvTag = () => {
  return request({
    url: '/getTvTag',
    method: 'get'
  })
}
import request from '@/network/request'

export const getMovieHot = () => {
  return request({
    url: '/getMovieHot',
    method: 'get'
  })
}

export const getMovieNew = () => {
  return request({
    url: '/getMovieNew',
    method: 'get'
  })
}

export const getMovieHigh = () => {
  return request({
    url: '/getMovieHigh',
    method: 'get'
  })
}

export const getMovieCold = () => {
  return request({
    url: '/getMovieCold',
    method: 'get'
  })
}

export const getMovieCh = () => {
  return request({
    url: '/getMovieCh',
    method: 'get'
  })
}

export const getMovieEur = () => {
  return request({
    url: '/getMovieEur',
    method: 'get'
  })
}

export const getMovieKor = () => {
  return request({
    url: '/getMovieKor',
    method: 'get'
  })
}

export const getMovieJan = () => {
  return request({
    url: '/getMovieJan',
    method: 'get'
  })
}
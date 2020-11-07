import request from '@/network/request'

export const getMusicImgList = () => {
  return request({
    url: '/getmusicImgList',
    method: 'get'
  })
}

export const getAlbumImgList = () => {
  return request({
    url: '/getalbumImgList',
    method: 'get'

  })
}

export const getmusicRank = () => {
  return request({
    url: '/getmusicRank',
    method: 'get'
  })
}

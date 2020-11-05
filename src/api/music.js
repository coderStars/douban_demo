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

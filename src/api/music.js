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
<<<<<<< HEAD
=======

  })
}

export const getmusicRank = () => {
  return request({
    url: '/getmusicRank',
    method: 'get'
  })
}
export const getAllShopList = () => {
  return request({
    url: '/getAllShops',
    method: 'get'
>>>>>>> 79235f8faf04a75c4b7321f324c75d45fe659ef1
  })
}

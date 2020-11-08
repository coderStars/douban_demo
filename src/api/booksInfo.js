import request from '@/network/request'

export const getBooksInfo = (id) => {
  return request({
    url: `/getNewsBooksList/${id}`,
    method: 'get',
  })
}


import request from '@/utils/request'

export function getUser() {
  return request({
    url: 'authority_getuser',
    method: 'get'
  })
}
export function createUser(data) {
  return request({
    url: 'authority_createuser',
    method: 'post',
    data
  })
}


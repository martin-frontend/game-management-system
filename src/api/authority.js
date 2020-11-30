import request from '@/utils/request'

export function getUser() {
  return request({
    url: 'authority/getuser.php',
    method: 'get'
  })
}
export function createUser(data) {
  return request({
    url: 'authority/createuser.php',
    method: 'post',
    data
  })
}


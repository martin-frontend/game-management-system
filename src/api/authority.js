import request from '@/utils/request'

// user
export function getUser() {
  return request({
    url: 'user/getuser',
    method: 'get'
  })
}
export function createUser(data) {
  return request({
    url: 'user/createuser',
    method: 'post',
    data
  })
}
export function updateUser(data) {
  return request({
    url: 'user/updateuser',
    method: 'post',
    data
  })
}
export function deleteUser(data) {
  return request({
    url: 'user/deleteuser',
    method: 'post',
    data
  })
}

// role
export function getRole() {
  return request({
    url: 'authority/getrole',
    method: 'get'
  })
}
export function createRole(data) {
  return request({
    url: 'authority/createrole',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: 'authority/updaterole',
    method: 'post',
    data
  })
}
export function deleteRole(data) {
  return request({
    url: 'authority/deleterole',
    method: 'post',
    data
  })
}

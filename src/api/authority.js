import request from '@/utils/request'

// user
export function getUser(data) {
  return request({
    url: 'user',
    method: 'get',
    params: data
  })
}
export function createUser(data) {
  return request({
    url: 'user',
    method: 'post',
    data
  })
}
export function updateUser(data) {
  return request({
    url: 'user',
    method: 'put',
    data
  })
}
export function deleteUser(data) {
  return request({
    url: 'user',
    method: 'delete',
    data
  })
}

// role
export function getRole(data) {
  return request({
    url: 'authority/role',
    method: 'get',
    params: data
  })
}
export function createRole(data) {
  return request({
    url: 'authority/role',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: 'authority/role',
    method: 'put',
    data
  })
}
export function deleteRole(data) {
  return request({
    url: 'authority/role',
    method: 'delete',
    data
  })
}

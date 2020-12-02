import request from '@/utils/request'

// user
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
export function updateUser(data) {
  return request({
    url: 'authority_updateuser',
    method: 'post',
    data
  })
}
export function deleteUser(data) {
  return request({
    url: 'authority_deleteuser',
    method: 'post',
    data
  })
}

// role
export function getRole() {
  return request({
    url: 'authority_getrole',
    method: 'get'
  })
}
export function createRole(data) {
  return request({
    url: 'authority_createrole',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: 'authority_updaterole',
    method: 'post',
    data
  })
}
export function deleteRole(data) {
  return request({
    url: 'authority_deleterole',
    method: 'post',
    data
  })
}
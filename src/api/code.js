import request from '@/utils/request'

export function getCode(data) {
  return request({
    url: 'operation_getactivitycode',
    method: 'post',
    data
  })
}
export function createCode(data) {
  return request({
    url: 'operation_createactivitycode',
    method: 'post',
    data
  })
}
export function updateCode(data) {
  return request({
    url: 'operation_updateactivitycode',
    method: 'post',
    data
  })
}
export function deleteCode(data) {
  return request({
    url: 'operation_deleteactivitycode',
    method: 'post',
    data
  })
}


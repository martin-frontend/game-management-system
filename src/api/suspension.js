import request from '@/utils/request'

export function getSuspension() {
  return request({
    url: 'operation/getban',
    method: 'get'
  })
}
export function createSuspension(data) {
  return request({
    url: 'operation/createban',
    method: 'post',
    data
  })
}
export function updateSuspension(data) {
  return request({
    url: 'operation/updateban',
    method: 'post',
    data
  })
}

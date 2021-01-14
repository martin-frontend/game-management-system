import request from '@/utils/request'

export function getSuspension(data) {
  return request({
    url: 'operation/getban',
    method: 'post',
    data
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

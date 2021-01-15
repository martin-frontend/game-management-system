import request from '@/utils/request'

export function getSuspension(data) {
  return request({
    url: 'operation/ban',
    method: 'get',
    params: data
  })
}
export function createSuspension(data) {
  return request({
    url: 'operation/ban',
    method: 'post',
    data
  })
}
export function updateSuspension(data) {
  return request({
    url: 'operation/ban',
    method: 'put',
    data
  })
}

import request from '@/utils/request'

export function getSuspension(data) {
  return request({
    url: 'operation_getsuspension',
    method: 'post',
    data
  })
}
export function createSuspension(data) {
  return request({
    url: 'operation_createsuspension',
    method: 'post',
    data
  })
}
export function updateSuspension(data) {
  return request({
    url: 'operation_updatesuspension',
    method: 'post',
    data
  })
}

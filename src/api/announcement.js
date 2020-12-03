import request from '@/utils/request'

export function getBulletin(data) {
  return request({
    url: 'operation_getbulletin',
    method: 'post',
    data
  })
}
export function createBulletin(data) {
  return request({
    url: 'operation_createbulletin',
    method: 'post',
    data
  })
}

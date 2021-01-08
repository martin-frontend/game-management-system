import request from '@/utils/request'

export function getBulletin() {
  return request({
    url: 'operation_getbulletin',
    method: 'get'
  })
}
export function createBulletin(data) {
  return request({
    url: 'operation_createbulletin',
    method: 'post',
    data
  })
}
export function updateBulletin(data) {
  return request({
    url: 'operation_updatebulletin',
    method: 'post',
    data
  })
}
export function deleteBulletin(data) {
  return request({
    url: 'operation_deletebulletin',
    method: 'post',
    data
  })
}


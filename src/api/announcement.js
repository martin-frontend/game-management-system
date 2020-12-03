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
export function updatebulletin(data) {
  return request({
    url: 'operation_updatebulletin',
    method: 'post',
    data
  })
}
export function deletebulletin(data) {
  return request({
    url: 'operation_deletebulletin',
    method: 'post',
    data
  })
}


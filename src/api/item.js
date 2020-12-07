import request from '@/utils/request'

export function getItem(data) {
  return request({
    url: 'operation_getsenditem',
    method: 'post',
    data
  })
}
export function createItem(data) {
  return request({
    url: 'operation_createsenditem',
    method: 'post',
    data
  })
}
export function updateItem(data) {
  return request({
    url: 'operation_updatesenditem',
    method: 'post',
    data
  })
}
export function deleteItem(data) {
  return request({
    url: 'operation_deletesenditem',
    method: 'post',
    data
  })
}


import request from '@/utils/request'

export function getAnnounce(data) {
  return request({
    url: '/operation/announce',
    method: 'get',
    params: data
  })
}
export function createAnnounce(data) {
  return request({
    url: '/operation/announce',
    method: 'post',
    data
  })
}
export function updateAnnounce(data) {
  return request({
    url: '/operation/announce',
    method: 'put',
    data
  })
}
export function deleteAnnounce(data) {
  return request({
    url: '/operation/announce',
    method: 'delete',
    data
  })
}
export function getannouncecategory() {
  return request({
    url: '/operation/announce/category',
    method: 'get'
  })
}
export function updateannouncecategory(data) {
  return request({
    url: '/operation/announce/category',
    method: 'put',
    data
  })
}

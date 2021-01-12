import request from '@/utils/request'

export function getAnnounce() {
  return request({
    url: '/operation/getannounce',
    method: 'get'
  })
}
export function createAnnounce(data) {
  return request({
    url: '/operation/createannounce',
    method: 'post',
    data
  })
}
export function updateAnnounce(data) {
  return request({
    url: '/operation/updateannounce',
    method: 'post',
    data
  })
}
export function deleteAnnounce(data) {
  return request({
    url: '/operation/deleteannounce',
    method: 'post',
    data
  })
}
export function getannouncecategory() {
  return request({
    url: '/operation/getannouncecategory',
    method: 'get'
  })
}
export function updateannouncecategory(data) {
  return request({
    url: '/operation/updateannouncecategory',
    method: 'post',
    data
  })
}

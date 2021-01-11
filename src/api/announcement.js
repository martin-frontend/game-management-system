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


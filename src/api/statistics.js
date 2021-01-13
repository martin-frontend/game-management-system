import request from '@/utils/request'

export function getremain(data) {
  return request({
    url: '/statistics_getremain',
    method: 'post',
    data
  })
}
export function getrevenue(data) {
  return request({
    url: '/statistics_getrevenue',
    method: 'post',
    data
  })
}
export function getAddAccount(data) {
  return request({
    url: '/statistics_getaddaccount',
    method: 'post',
    data
  })
}
export function getActiveAccount(data) {
  return request({
    url: 'statistics_getactiveaccount',
    method: 'post',
    data
  })
}

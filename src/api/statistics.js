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
export function getUserDau(data) {
  return request({
    url: '/analysis/getuserdau',
    method: 'post',
    data
  })
}
export function getUserWau(data) {
  return request({
    url: '/analysis/getuserwau',
    method: 'post',
    data
  })
}
export function getUserMau(data) {
  return request({
    url: '/analysis/getusermau',
    method: 'post',
    data
  })
}

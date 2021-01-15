import request from '@/utils/request'

export function getremain(data) {
  return request({
    url: '/analysis_getremain',
    method: 'post',
    data
  })
}
export function getrevenue(data) {
  return request({
    url: '/analysis_getrevenue',
    method: 'post',
    data
  })
}
export function getAddAccount(data) {
  return request({
    url: '/analysis_getaddaccount',
    method: 'post',
    data
  })
}
export function getUserDau(params) {
  return request({
    url: '/analysis/user/dau',
    method: 'get',
    params
  })
}
export function getUser(params) {
  return request({
    url: '/analysis/user',
    method: 'get',
    params
  })
}
export function getUserLog(params) {
  return request({
    url: '/analysis/user/log',
    method: 'get',
    params
  })
}
export function getUserWau(params) {
  return request({
    url: '/analysis/user/wau',
    method: 'get',
    params
  })
}
export function getUserMau(params) {
  return request({
    url: '/analysis/user/mau',
    method: 'get',
    params
  })
}
export function getUserNru(params) {
  return request({
    url: '/analysis/user/nru',
    method: 'get',
    params
  })
}

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
export function getUserDau(data) {
  return request({
    url: '/analysis/getuserdau',
    method: 'post',
    data
  })
}
export function getUser(data) {
  return request({
    url: '/analysis/getuser',
    method: 'post',
    data
  })
}
export function getUserLog(data) {
  return request({
    url: '/analysis/getuserlog',
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
export function getUserNru(data) {
  return request({
    url: '/analysis/getusernru',
    method: 'post',
    data
  })
}

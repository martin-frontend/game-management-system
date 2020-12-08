import request from '@/utils/request'

// active account
export function getActiveAccount() {
  return request({
    url: 'statistics_getactiveaccount',
    method: 'get'
  })
}
// add account
export function getAddAccount() {
  return request({
    url: 'statistics_getaddaccount',
    method: 'get'
  })
}

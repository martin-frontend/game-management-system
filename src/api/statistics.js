import request from '@/utils/request'

export function getremain(data) {
  return request({
    url: '/statistics_getremain',
    method: 'post',
    data
  })
}

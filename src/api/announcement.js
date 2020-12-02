import request from '@/utils/request'

export function getAnnouncementBulletin(data) {
  return request({
    url: 'operation_getbulletin',
    method: 'post',
    data
  })
}

import request from '@/utils/request'

export function getAccountInfo(data) {
  return request({
    url: 'player/accountinfo.php',
    method: 'post',
    data
  })
}

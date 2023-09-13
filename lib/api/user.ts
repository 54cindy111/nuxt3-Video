import request from '@/utils/request'

const baseUrl = ''

// user

function login (data: any) {
  return request({
    url: baseUrl + '/login',
    method: 'POST',
    data
  })
}

export const user = {
  login
}

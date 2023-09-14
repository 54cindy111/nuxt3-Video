import request from '@/utils/request'

const baseUrl = ''

// video

function getFollowingList () {
  return request({
    url: baseUrl + 'following_list',
    method: 'GET'
  })
}

function getForYouList () {
  return request({
    url: baseUrl + 'for_you_list',
    method: 'GET'
  })
}

export const video = {
  getFollowingList,
  getForYouList
}

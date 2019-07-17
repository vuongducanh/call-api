import request from '@/utils/request'
import API from '../constants/constants-api'

export function login(data) {
  return request({
    url:  API.apiLogin,
    method: 'post',
    data: data
  })
}

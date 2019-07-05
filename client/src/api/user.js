import request from '@/utils/request'
import API from '../constants/constants-api'

export function get() {
  return request({
    url:  API.apiCreateData,
    method: 'get'
  })
}

export function create(data) {
  return request({
    url:  API.apiCreateData,
    method: 'post',
    data: data
  })
}


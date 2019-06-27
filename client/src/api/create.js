import axios from 'axios'
import API from '../constants/constants-api'

export function create(data) {
  return axios.post(API.apiCreateData, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

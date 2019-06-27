import axios from 'axios'
import API from '../constants/constants-api'

export function get() {
  return axios.get(API.apiGetData, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

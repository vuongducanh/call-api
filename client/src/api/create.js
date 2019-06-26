import axios from 'axios'
export function get(uri) {
  return axios.get(uri, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

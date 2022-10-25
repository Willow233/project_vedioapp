import axios from 'axios'

const service = axios.create()

export function getNavList () {
  return service({
    url: '/navList',
    method: 'get'
  })
}

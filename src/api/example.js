import fetch from '@/utils/fetch'

export function GetXXX(params) {
  return fetch({
    url: '/apiurl/example',
    method: 'get',
    data: {
    },
    params: {
    },
    responseType: 'json'
  })
}

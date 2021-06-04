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

// 配合上传文件头
export function upload(file) {
  var formData = new FormData()
  formData.append('file', file)
  return fetch({
    url: '/apiurl/imgUpload',
    method: 'post',
    data: formData,
    params: {
    },
    responseType: 'json'
  })
}

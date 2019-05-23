import axios from 'axios'
// import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
// axios.defaults.transformRequest = [function (data) { return qs.stringify(data) }]

axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('jf-edu-token')
    if (token) {
      config.headers.Authorization = `${token}`
    }
    config.headers.type = 'wechat'
    let userid = localStorage.getItem('jf-edu-userId')
    if (userid) {
      config.headers.userId = `${userid}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

axios.interceptors.response.use(
  response => {
    // 返回全局状态码统一识别处理
    if (response.data.code === 0) {
      return response
    } else if (!response.data.errmsg) {
      // 隔离公共接口的get返回数据
      return response
    } else {
      return Promise.reject(response.data || {})
    }
  },
  error => {
    console.log(error)
//  if (error.response) {
//    switch (error.response.status) {
//      case 401:
//        localStorage.removeItem('jf-token')
//        router.replace({
//          path: '/',
//          query: {
//            redirect: router.currentRoute.fullPath
//          }
//        })
//    }
//  }
    return Promise.reject(error.response.data || {})
  })

export default axios

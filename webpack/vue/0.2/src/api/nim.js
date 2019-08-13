import axios from './axios'

export default {
  // 初始化用户的nim的token
  initNimToken (param) {
    return axios.post('/api/im/GetUserToken', param)
  },

  // 获取用户的nim的id
  getUserNimId (param) {
    return axios.post('/api/im/GetUserAccid', param)
  },

  // 获取医院的nim的id
  getHospitalNimId (param) {
    return axios.post('/api/im/GetHospitalAccid', param)
  }
}

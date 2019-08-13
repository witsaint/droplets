import axios from './axios'

export default {
  // 获取用户的聊天列表
  // page: 页码
  getMessageList (param) {
    return axios.post('/api/userMessage/grouplist', param)
  },

  // 获取当前会话的聊天记录
  // group_id: 会话id
  // last_id: 最后一条记录
  getMessage (param) {
    return axios.post('/api/userMessage/list', param)
  },

  // 根据用户判断是否有会话记录
  // user_id_to: 对方的userId
  getMessageGroupId (param) {
    return axios.post('/api/userMessage/getGroup', param)
  }
}

import axios from './axios'

export default {
  // 新增订单
  // hospital_id: 医院ID
  // project_name: 项目
  // amount: 金额 最多两位小数
  newOrder (param) {
    return axios.post('/api/order/add', param)
  },

  // 查看新增订单详情
  // id: 订单id
  getNewOrderDetail (param) {
    return axios.post('/api/order/detail', param)
  },

  // 支付分期申请
  // order_id: 订单id
  applyPay (param) {
    return axios.post('/api/pay/apply', param)
  },

  // 订单列表
  // type: 订单类型
  getOrderList (param) {
    return axios.post('/api/order/list', param)
  },

  // 查看列表订单详情
  // order_id: 订单id
  getOrderDetail (param) {
    return axios.post('/api/order/detail', param)
  },

  // 订单分期
  // order_id: 订单id
  cancelOrder (param) {
    return axios.post('/api/order/UpdateCancel', param)
  },

  // 分期订单列表
  getFqList (param) {
    return axios.post('/api/pay/fqList', param)
  }
}

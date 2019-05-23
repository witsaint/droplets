import axios from './axios'

export default {
  // 登陆
  login (param) {
    return axios.post('/risk-web/system/login.action', param)
  },
  validationCodeServlet (param) {
    return axios.post('/risk-web/validationCodeServlet.png', param)
  },
  // 获取菜单
  loadUserMenu (param) {
    return axios.post('/risk-web/system/user/loadUserMenu.action', param)
  },
  // 查询个人队列数据
  searchPersonQueue (param) {
    return axios.post('/', param)
  },
  // 实时还款批量查询
  beachSearch (param) {
    return axios.post('/', param)
  },
  // 综合查询
  colligateSearch (param) {
    return axios.post('/', param)
  },
  // 作业质量查询
  workQualitySearch (param) {
    return axios.post('/', param)
  },
  // inbound查询
  inboundSearch (param) {
    return axios.post('/', param)
  },
  // 手工委托查询
  manualEntrustSearch (param) {
    return axios.post('/', param)
  },
  // 人员查询
  personSearch (param) {
    return axios.post('/', param)
  },
  // 扣款审批查询
  debitApprovalSearch (param) {
    return axios.post('/', param)
  },
  // 班表查询
  classTableSearch (param) {
    return axios.post('/', param)
  },
  // 报表查询
  reportDataSearch (param) {
    return axios.post('/', param)
  },
  // 报表周期table查询
  SearchPeriodData (param) {
    return axios.post('/', param)
  },
  // 报表每日新增数据table查询
  SearchAddDataDailyData (param) {
    return axios.post('/', param)
  },
  // 报表每日新增数据table查询
  SearchTraceMoneyDailyData (param) {
    return axios.post('/', param)
  },
  // 报表每日新增件数查询
  SearchtraceCaseDailyData (param) {
    return axios.post('/', param)
  },
  // 案件详细
  searchDetailInfo (param) {
    return axios.post('/', param)
  },
  // 案件详细页面 -- 系统电话
  searchSystemPhoneData (param) {
    return axios.post('/', param)
  },
  // 案件详细页面 -- 通讯录
  searchMailListData (param) {
    return axios.post('/', param)
  },
  // 案件详细页面 -- 短信记录
  searchSMSLogData (param) {
    return axios.post('/', param)
  },
  // 案件详细页面 -- 行动历史
  searchActionHistoryData (param) {
    return axios.post('/', param)
  },
  // 案件详细页面 -- 流转历史
  searchCirculationHistoryData (param) {
    return axios.post('/', param)
  },
  // 案件详细页面 -- 自助还款记录
  searchIndependentRepaymentRecord (param) {
    return axios.post('/', param)
  },
  // 非查询操作隔绝线-----------------------------------------------------------------
  // 案件详细页面 -- 发短信
  sendMSM (param) {
    return axios.post('/', param)
  }
}

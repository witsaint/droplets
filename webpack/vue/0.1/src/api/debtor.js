/**
 * Created by gaodingqiang on 2017/10/23.
 */
import axios from '@/utils/axios'

export default {
  /* 债务人基本信息展示接口 */
  showBasicDebtorInfo (param) {
    return axios.post('/controller/debtor/showBasicDebtorInfo', param)
  },
  /* 添加债务人手机号码 */
  addDebtorMobile (param) {
    return axios.post('/controller/debtorMobile/addDebtorMobile', param)
  },
  /* 添加债务人手机号码状态 */
  modifyDebtorMobileState (param) {
    return axios.post('/controller/debtorMobile/modifyDebtorMobileState', param)
  },
  /* 新增银行账户 */
  addDebtorBankAccount (param) {
    return axios.post('/controller/debtorBankAccount/addDebtorBankAccount', param)
  },
  /* 修改银行账户 */
  modifyDebtorBankAccount (param) {
    return axios.post('/controller/debtorBankAccount/modifyDebtorBankAccount', param)
  },
  /* 修改户籍地址 */
  modifyDebtorPermanentAddress (param) {
    return axios.post('/controller/debtorAddress/modifyDebtorPermanentAddress', param)
  },
  /* 修改公司地址 */
  modifyDebtorCompanyAddress (param) {
    return axios.post('/controller/debtorAddress/modifyDebtorCompanyAddress', param)
  },
  /* 修改居住地址地址 */
  modifyDebtorResidenceAddress (param) {
    return axios.post('/controller/debtorAddress/modifyDebtorResidenceAddress', param)
  }
}

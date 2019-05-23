/**
 * Created by gaodingqiang on 2017/10/23.
 */
import axios from '@/utils/axios'

export default {
  /* 查询通讯录 */
  findDebtorContactByMobile (param) {
    return axios.post('/controller/debtorContact/findDebtorContactByMobile', param)
  },
  /* 查询通讯录 */
  findDebtorCallLogByMobile (param) {
    return axios.post('/controller/debtorCallLog/findDebtorCallLogByMobile', param)
  }
}

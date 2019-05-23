/**
 * Created by gaodingqiang on 2017/10/23.
 */
import axios from '@/utils/axios'

export default {
  /* 保存班表接口 */
  saveScheduleInfo (param) {
    return axios.post('/controller/scheduleInfo/saveScheduleInfo', param)
  },
  /* 删除班表接口 */
  deleteScheduleInfo (param) {
    return axios.post('/controller/scheduleInfo/deleteScheduleInfo', param)
  },
  /* 修改班表接口 */
  modifyScheduleInfo (param) {
    return axios.post('/controller/scheduleInfo/modifyScheduleInfo', param)
  },
  /* 查询某一天班表接口 */
  selectScheduleInfoByDay (param) {
    return axios.post('/controller/scheduleInfo/selectScheduleInfoByDay', param)
  },
  /* 查询某一月班表接口 */
  selectScheduleInfoByMonth (param) {
    return axios.post('/controller/scheduleInfo/selectScheduleInfoByMonth', param)
  }
}

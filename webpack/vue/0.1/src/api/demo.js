/**
 * Created by gaodingqiang on 2017/10/23.
 */
import axios from '@/utils/axios'

export default {
  /* 债务人基本信息展示接口 */
  testArray (param) {
    return axios.post('/t/person/array', param)
  }
}

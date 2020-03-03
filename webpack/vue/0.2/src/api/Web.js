import axios from './axios'
import {Message} from 'element-ui'
class Web {
  constructor () {
    this.axios = axios
  }
  setMethod (method) {
    this.method = method
  }
  do (url, param, success, failure, load, {method, options} = {method: 'POST', options: {success: 0}}) {
    // default
    if (!(url && param && success)) {
      console.log('请检查参数对应')
      return
    }
    this.method = method || 'POST'
    this.url = url
    this.param = param
    this.success = success
    this.failure = failure
    this.load = load
    this.options = options
    this.promise = {}
    this.main()
  }
  isFunction (agr) {
    return Object.prototype.toString.call(agr) === '[object Function]'
  }
  main () {
    this.load = true
    switch (this.method) {
      case 'POST':
        this.post()
    }
    this.promise.then(res => {
      this.load = false
      if (!this.handleForAxios(res)) {
        this.handleError()
        return
      }
      let resData = res.data
      this.handleSuccess(resData)
    }).catch(err => {
      this.load = false
      if (this.failure && this.isFunction(this.failure)) {
        this.failure(err)
      } else {
        this.showError(err)
      }
      console.log(err)
    })
  }
  post () {
    this.promise = this.axios.post(this.url, this.param)
  }
  showError (err) {
    Message({
      message: err.errmsg || '请求错误~~~',
      type: 'warning'
    })
  }
  handleForAxios (res) { // 配置当请求状态分别是200、500……的应对情况
    if (res.status === 200) {
      return true
    }
    return false
  }
  handleSuccess (resData) {
    let code = resData.code
    if (this.options && (this.options.success === 0)) {
      console.info(code === this.options.success)
      if (code === this.options.success) {
        console.info(this.isFunction(this.success))
        if (this.isFunction(this.success)) {
          debugger
          console.info(resData)
          this.success(resData.data)
        } else {
          console.warn('成功回调函数请检查是否是Function')
        }
      } else {
        this.handleError(resData.data)
      }
    }
  }
  handleError (data) {
    if (data) {
      if (this.failure && this.isFunction(this.failure)) {
        this.failure(data)
      } else {
        this.showError()
      }
    } else {
      this.showError()
    }
  }
}
var w = new Web()
export default w

import { Toast } from 'mint-ui'
import router from '../utils/router'
import store from '../store'

// 公用函数
export default {
  /*
   * 日期相关
   */
  parseTime (time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) {
        time = parseInt(time) * 1000
        date = new Date(time)
      }
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') {
        return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return timeStr
  },

  // 格式化时间
  formatTime (time, option, type) {
    if (type !== 'js') {
      time = +time * 1000
    }
    const d = new Date(time)

    if (option === 'normal') {
      let minute = d.getMinutes()
      let newMin
      if (minute < 10) {
        newMin = '0' + minute
      } else {
        newMin = minute
      }
      return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + newMin + ':' + d.getSeconds()
    } else {
      const now = Date.now()
      const diff = (now - d) / 1000
      if (diff < 30) {
        return '刚刚'
      } else if (diff < 3600) { // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
      } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
      } else if (diff < 3600 * 24 * 2) {
        return '1天前'
      }
      let minute = d.getMinutes()
      let newMin
      if (minute < 10) {
        newMin = '0' + minute
      } else {
        newMin = minute
      }
      return d.getMonth() + 1 + '月' + d.getDate() + '日 ' + d.getHours() + ':' + newMin
    }
  },

  // 计算日期相减天数
  dateMinus (initDate, endDate) {
    // let sdate = new Date(initDate.replace(/-/g, '/'))
    let sDate = new Date(initDate)
    let eDate = new Date(endDate)
    let days = eDate.getTime() - sDate.getTime()
    // 进行四舍五入处理时间戳差之差
    let day = Math.round(days / (1000 * 60 * 60 * 24))
    return day
  },

  // 计算日期相减天数
  timeMinus (initTime, endTime) {
    // let sdate = new Date(initDate.replace(/-/g, '/'))
    let diffTime = endTime - initTime
    // 计算出相差天数
    let days = Math.floor(diffTime / (24 * 3600 * 1000))
    // 计算出小时数
    let leave1 = diffTime % (24 * 3600 * 1000)
    // 计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))
    // 计算相差分钟数
    let leave2 = leave1 % (3600 * 1000)        // 计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))
    // 计算相差秒数
    let leave3 = leave2 % (60 * 1000)      // 计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000)
    // 格式化时间显示
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    // 防止计时器出现负数
    if (days < 0 || seconds < 0 || minutes < 0) {
      return 'cancel'
    }
    return days + ' 天 ' + hours + ' 小时 ' + minutes + ':' + seconds
  },

  /*
   * 获取url参数
   */
  getQueryObject (url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
      const name = decodeURIComponent($1)
      let val = decodeURIComponent($2)
      val = String(val)
      obj[name] = val
      return rs
    })
    return obj
  },

  // 处理图片
  handleImg (imgData, type) {
    let imgArr = imgData.split(',')
    if (!type) {
      return imgArr
    }
    // type类型1取第一个 2为最后一个
    if (type === 1) {
      return imgArr[0]
    } else {
      return imgArr[imgArr.length - 1]
    }
  },

  // 修复ios图片旋转
  rotateImg (img, direction, canvas) {
    var minStep = 0
    var maxStep = 3
    if (img == null) return
    var height = img.height
    var width = img.width
    var step = 2
    if (step == null) {
      step = minStep
    }
    if (direction === 'right') {
      step++
      step > maxStep && (step = minStep)
    } else {
      step--
      step < minStep && (step = maxStep)
    }
    var degree = step * 90 * Math.PI / 180
    var ctx = canvas.getContext('2d')
    switch (step) {
      case 0:
        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, img.width, img.height)
        break
      case 1:
        canvas.width = height
        canvas.height = width
        ctx.rotate(degree)
        ctx.drawImage(img, 0, -height, img.width, img.height)
        break
      case 2:
        canvas.width = width
        canvas.height = height
        ctx.rotate(degree)
        ctx.drawImage(img, -width, -height, img.width, img.height)
        break
      case 3:
        canvas.width = height
        canvas.height = width
        ctx.rotate(degree)
        ctx.drawImage(img, -width, 0, img.width, img.height)
        break
    }
  },

  // 处理文字
  contentTruncate (content) {
    // 过滤掉html标签
    let stringContent = String(content).replace(/<\/?[^>]*>/g, '')
    return stringContent
  },

  // 处理路由回退
  routerBack (backParam, type) {
    if (type === 'name') {
      router.push({ name: backParam })
    } else {
      if (backParam) {
        router.push({ path: backParam })
      } else {
        router.go(-1)
      }
    }
  },

  // https://cn.vuejs.org/v2/guide/reactivity.html
  // Vue 不能检测到对象属性的添加或删除。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上
  mergeObject (dest, src) {
    if (typeof dest !== 'object' || dest === null) {
      dest = Object.create(null)
    }
    dest = Object.assign(Object.create(null), dest, src)
    return dest
  },

  /*
   * 错误统一处理
   */
  errhandler (err) {
    console.log(JSON.stringify(err))
    // 根据错误代码 直接进行路由跳转
    switch (err.code) {
      // 不存在
      case 404:
        router.replace({
          path: '/error/404'
        })
        break
      // 内部错误
      case 500:
        router.replace({
          path: '/error/disconnect'
        })
        break
      // 未登录或者登录超时
      case 1000:
        localStorage.removeItem('jf-token')
        store.commit('clearUser')
        // 记住重定向前的地址 登陆后回跳
        console.log(router.currentRoute.fullPath)
        store.commit('setLoginRedirect', router.currentRoute.fullPath)
        router.push({
          path: '/login/byPass'
        })
        break
      default:
        break
    }
    // 针对后台验证插件返回错误信息非字符串时 要切割再拼接处理
    let errMessage = ''
    if (typeof (err.errmsg) !== 'string') {
      for (let k in err.errmsg) {
        errMessage += err.errmsg[k] + ' '
      }
    } else {
      errMessage = err.errmsg
    }
    // 短信接口改为对应错误提示
    if (err.desc) {
      errMessage = err.desc
    }
    // 提示错误信息
    Toast({
      message: errMessage,
      position: 'bottom'
    })
  }
}

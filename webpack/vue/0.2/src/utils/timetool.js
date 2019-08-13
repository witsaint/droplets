/**
 * Created by gaodingqiang on 2017/6/22.
 */
export default {
  oneDayMilliSeconds: 86400000,
  /* 验证码相关
   * 校验验证码是否可用
   */
  checkVcodeAvailable (codeType) {
    let disabled = localStorage.getItem('vcode_' + codeType + '_disabled') // 检查验证码可用
    if (disabled) {
      let nowTime = Math.round(new Date().getTime() / 1000)
      let lastTime = localStorage.getItem('vcode_' + codeType + '_timestamp') // 获得上次验证码可用时间
      console.log(nowTime + '...' + nowTime)
      // console.log(nowTime - lastTime)
      return 60 - (nowTime - lastTime) // 返回倒计时
    } else {
      return 60
    }
  },

  /* 验证码相关
   * 验证码计时器
   */
  vcodeTimer (codeType, _this, timer) {
    // TODO...待优化...回调参数
    // 保存当前组件
    let _this_ = _this
    // 保存组件的数据
    let vcode = _this.vcode
    // 保存传回的timer
    let _timer = timer
    if (vcode.countdown <= 0) {
      // 页面显示处理
      vcode.text = '获取验证码'
      vcode.countdown = 60
      vcode.disabled = null
      // 保存当前验证码类型时间戳
      localStorage.setItem('vcode_' + codeType + '_timestamp', Math.round(new Date().getTime() / 1000))
      // 移除当前类型验证码不可用标记
      localStorage.removeItem('vcode_' + codeType + '_disabled')
      return
    } else {
      // 页面显示处理
      vcode.countdown--
      vcode.disabled = 'disabled'
      vcode.text = vcode.countdown + 's 后重发'
      // 设置当前类型验证码不可用标记
      localStorage.setItem('vcode_' + codeType + '_disabled', 'disabled')
    }
    setTimeout(function () {
      // TODO...待优化...利用保存的参数进行递归
      timer.vcodeTimer(codeType, _this_, _timer)
    }, 1000)
  },
  /*
   *  format时间 Y年 M月 d日 h时 m分 s秒 q季度 S毫秒
   */
  formatDate (date, fmt) {
    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(),  // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },
  /* 获取当天日期 */
  getDate (date) {
    if (!this.validateDate(date)) {
      return new Date()
    }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
  },
  /* 验证是否是时间类型 */
  validateDate (date) {
    if (!date) {
      console.warn('传入参数为空')
      return false
    }
    const vObj = {}
    if (vObj.toString.call(date) === '[object Date]') {
      return true
    } else {
      console.warn('传入的不是时间类型')
      return false
    }
  },
  /* 获取本周一（日期格式） */
  getCurrentWeekFirstDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    let currentWeekDay = date.getDay()
    return (new Date(date - ((currentWeekDay - 1) * this.oneDayMilliSeconds)))
  },
  /* 获取本周日 （日期格式） */
  getCurrentWeekLastDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    let currentWeekDay = date.getDay()
    return (new Date(date.getTime() + (7 - currentWeekDay) * this.oneDayMilliSeconds))
  },
  /* 获取当月的第一天 （日期格式） */
  getCurrentMonthFirstDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    date.setDate(1)
    return date
  },
  /* 获取当月最后一天 （日期格式） */
  getCurrentMonthLastDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    this.currentMonth = date.getMonth()
    this.nextMonth = this.currentMonth + 1
    var firstDayForNextMonth = new Date(date.getFullYear(), this.nextMonth, 1)
    return new Date(firstDayForNextMonth - 86400000)
  },
  /* 获取当季度第一天（日期格式） */
  getCurrentQuarterFirstDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    let quarter = Math.floor((date.getMonth() + 3) / 3)
    let startForQuarter = new Date(date.getFullYear(), (quarter - 1) * 3, 1)
    return startForQuarter
  },
  /* 获取当季度最后一天 （日期格式） */
  getCurrentQuarterLastDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    let quarter = Math.floor((date.getMonth() + 3) / 3)
    let nextDayForEnd = new Date(date.getFullYear(), quarter * 3, 1)
    return new Date(nextDayForEnd.getTime() - this.oneDayMilliSeconds)
  },
  /* 获取当年第一天 （日期格式） */
  getCurrentYearFirstDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    date.setDate(1)
    date.setMonth(0)
    return date
  },
  /* 获取当年最后天 （日期格式） */
  getCurrentYearLastDay (date) {
    if (!this.validateDate(date)) {
      return
    }
    date = this.getDate(date)
    let nextYearFirstDay = new Date(date.getFullYear() + 1, 0, 1)
    return new Date(nextYearFirstDay.getTime() - this.oneDayMilliSeconds)
  }
}


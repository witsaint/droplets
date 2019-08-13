// 公用函数
export default {
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
    // TODO 待优化 回调参数
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
      // TODO 待优化 利用保存的参数进行递归
      timer.vcodeTimer(codeType, _this_, _timer)
    }, 1000)
  }
}

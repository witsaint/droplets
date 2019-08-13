/**
 * Created by gaodingqiang on 2017/9/13.
 */
export default class Mobile {
  constructor () {
    this.userAgent = window.navigator.userAgent
    this.appVersion = window.navigator.appVersion
    console.info('init Mobile class')
  }

  isTouchDevice () {
    try {
      document.createEvent('TouchEvent')
      let _div = document.createElement('div')
      _div.addEventListener('touchstart', false)
      _div.addEventListener('touchmove', false)
      _div.addEventListener('touchend', false)
      return true
    } catch (e) {
      return false
    }
  }
  /* 是否微信浏览器 */
  isWeixin () {
    var ua = this.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      return true
    } else {
      return false
    }
  }
  iosOrAnd () {
    var a = navigator.userAgent
    return {
      trident: a.indexOf('Trident') > -1,
      presto: a.indexOf('Presto') > -1,
      webKit: a.indexOf('AppleWebKit') > -1,
      gecko: a.indexOf('Gecko') > -1 && a.indexOf('KHTML') === -1,
      mobile: !!a.match(/AppleWebKit.*Mobile.*/),
      ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: a.indexOf('Android') > -1 || a.indexOf('Linux') > -1,
      iPhone: a.indexOf('iPhone') > -1,
      iPad: a.indexOf('iPad') > -1,
      webApp: a.indexOf('Safari') === -1
    }
  }
  createMate (scale) {
    var metaEl = document.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    metaEl.setAttribute('content', 'width=device-width; initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
    if (document.documentElement.firstElementChild) {
      document.documentElement.firstElementChild.appendChild(metaEl)
    } else {
      var wrap = document.createElement('div')
      wrap.appendChild(metaEl)
      document.write(wrap.innerHTML)
    }
  }
  updateViewport (scale) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no, width=device-width')
  }
  getLocation (showPosition) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      console.warn('Geolocation is not supported by this browser.')
    }
  }
}

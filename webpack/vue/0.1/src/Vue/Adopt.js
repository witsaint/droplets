/**
 * Created by gaodingqiang on 2017/8/25.
 */
import Mobile from './Mobile'
class Adopt extends Mobile {
  constructor (opts) {
    super()
    if (!opts.UIWidth) {
      throw new Error('没有设置UI图的宽度')
    }
    this.tid
    this.dpr = window.devicePixelRatio || 1
    this.defaultScale = 1 / window.devicePixelRatio
    this.docEl = document.documentElement
    if (opts.scaleIgnore === false) {
      this.scaleIgnore = false
    } else {
      this.scaleIgnore = true
      this.html_rem = this.docEl.clientWidth * window.devicePixelRatio / (opts.UIWidth / 100)
    }
    // this.html_rem = this.docEl.clientWidth / (opts.UIWidth / 100)
    this.updateViewport(this.scaleIgnore ? this.defaultScale : 1) // 1首先要重新构造viewport
    this.setBodyFontSize()
    this.setRem()
    // reset rem unit on page resize
    window.addEventListener('resize', () => {
      clearTimeout(this.tid)
      this.tid = setTimeout(this.setRem, 300)
    }, false)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        clearTimeout(this.tid)
        this.tid = setTimeout(this.setRem, 300)
        // this.setRem()
      }
    })
  }

  setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * this.dpr) + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', this.setBodyFontSize)
    }
  }

  setRem () {
    if (this.html_rem) {
      this.docEl.style.fontSize = this.html_rem + 'px'
      /* 设置data-dpr属性，留作的css hack之用 */
      this.docEl.setAttribute('data-dpr', this.dpr)
    }
  }
}
export default Adopt

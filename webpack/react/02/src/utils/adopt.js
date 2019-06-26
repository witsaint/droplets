/**
 * Created by gaodingqiang on 2017/8/25.
 * 当前adopt设置font-size 是根据postcss-px2rem设置的75（总宽度设置100份的rem）设计图宽度：750px
 */
class Adopt {
  constructor() {
    this.tid = null;
    this.dpr = window.devicePixelRatio || 1;
    // this.defaultScale = 1 / window.devicePixelRatio; // 如果需要重新构造viewport
    this.docEl = document.documentElement;
    this.width = this.docEl.getBoundingClientRect
      ? this.docEl.getBoundingClientRect().width
      : this.docEl.clientWidth;
    this.html_rem = this.width / 10; // 根据设置的remUnit和UI的比率
    this.setBodyFontSize();
    this.setRem();
    // reset rem unit on page resize
    window.addEventListener('resize', () => {
      clearTimeout(this.tid);
      this.tid = setTimeout(this.setRem, 0);
    }, false);
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        clearTimeout(this.tid);
        this.tid = setTimeout(this.setRem, 0);
      }
    });
  }

  setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = `${12 * this.dpr}px`;
    } else {
      document.addEventListener('DOMContentLoaded', this.setBodyFontSize);
    }
  }

  setRem() {
    if (this.html_rem) {
      this.docEl.style.fontSize = `${this.html_rem}px`;
      // 设置data-dpr属性，留作的css hack之用
      this.docEl.setAttribute('data-dpr', this.dpr);
    }
  }
}
export default Adopt;

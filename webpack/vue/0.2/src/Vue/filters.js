/* 处理图片路径 */
export function imgHandle (value) {
  if (/^http/.test(value)) {
    if (/http:\/\/image.94ym.cn/.test(value)) {
      let newValue = value.replace(/http:\/\/image.94ym.cn/g, '/u1')
      return newValue
    }
    return value
  } else {
    return '/' + value
  }
}

/* 价格处理过滤器 */
export function priceFilter (value) {
  return '¥ ' + (value / 100).toFixed(2)
}

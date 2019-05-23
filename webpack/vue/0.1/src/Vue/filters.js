/* 价格处理过滤器 */
export function priceFilter (value) {
  let val = parseInt(value)
  return (val).toFixed(2)
}
export function timeFormat (val) {
  if (!val) {
    return ''
  }
  let time = new Date(val)
  let y = time.getFullYear()
  let m = time.getMonth() + 1
  let d = time.getDay() + 1
  let mS = m > 9 ? m : '0' + m
  let dS = d > 9 ? d : '0' + d
  return y + '-' + mS + '-' + dS
}
export function status (value) {
  switch (value + '') {
    case '0':
      return '立即还款'
    case '1':
      return '已扣款'
    case '2':
      return '扣款失败'
    case '-1':
      return '取消'
  }
}

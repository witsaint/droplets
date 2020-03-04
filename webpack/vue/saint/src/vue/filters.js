
/* 价格处理过滤器 */
export function priceFilter (value) {
  return '¥ ' + (value / 100).toFixed(2)
}

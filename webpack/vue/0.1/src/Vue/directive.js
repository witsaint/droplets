export function textcolor (el, binding, vnode) {
  let status = binding.value + ''
  switch (status) {
    case '6' :
      el.style.color = '#3385f1'
      break
    case '13':
      el.style.color = '#3385f1'
      break
    case '10':
      el.style.color = '#44b436'
      break
    case '11':
      el.style.color = '#44b436'
      break
    case '7':
      el.style.color = '#f23e3f'
      break
    case '9':
      el.style.color = '#f23e3f'
      break
    default:
      el.style.color = '#333333'
  }
}

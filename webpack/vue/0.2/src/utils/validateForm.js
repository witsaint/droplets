/**
 * Created by jiachenpan on 16/11/18.
 */

/* 合法手机号 */
export function validateMobile (mobile) {
  const reg = /^1[3|4|5|7|8][0-9]{9}$/
  return reg.test(mobile)
}

/* 合法密码 */
export function validatePassword (password) {
  return password.length > 7
}

/* 合法验证码 */
export function validateVcode (vcode) {
  return vcode.length !== 7
}

/* 合法昵称 */
export function validateNickname (nickname) {
  return nickname && nickname.length <= 10
}

/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}
/* 小写字母 */
export function validateNum (str) {
  const reg = /^[0-9]+$/
  return reg.test(str)
}

export function validatemailBox (szMail) {
  var szReg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
  return szReg.test(szMail)
}
export function validatemailConnect (szMail) {
  var szReg = /^[0-9-]+$/
  return szReg.test(szMail)
}
/* 验证key */
// export function validateKey(str) {
//     var reg = /^[a-z_\-:]+$/;
//     return reg.test(str);
// }

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
/* 浮点数 */
export function validatFloatNum (num, decimalLen) {
  const regAll = /^(-?\d+)(\.\d+)?$/
  if (decimalLen === void 0) {
    return regAll.test(num)
  } else {
    if (Number.isInteger(decimalLen)) {
      var reg = new RegExp('^\\d+(\\.(\\d){1,' + decimalLen + '})?$')
      console.info(reg)
      return reg.test(num)
    }
  }
}
/* element表单验证---number */
const validateNumber = (value, callback, min, max) => {
  console.log(value)
  if (!validateNum(value)) {
    callback(new Error('请输入数字值'))
  } else {
    validateMoreOrLessForNum(value, callback, min, max)
  }
  callback()
}

/* element表单验证---float */
const validateFloat = (value, callback, min, max, decimalLen) => {
  if (value && !validatFloatNum(value, decimalLen)) {
    callback(new Error('该值类型不对或小数位过长'))
  } else {
    validateMoreOrLessForNum(value, callback, min, max)
  }
}

/* 验证大小关系 */
const validateMoreOrLessForNum = (value, callback, min, max) => {
  if (min && min > value) {
    callback(new Error('该值不能小于' + min))
  } else if (max && max < value) {
    callback(new Error('该值不能大于' + max))
  }
}
/* 验证大小关系 */
const validateMoreOrLessForStr = (value, callback, min, max) => {
  if (Number.isInteger(min) && min > value.length) {
    callback(new Error('该值长度不能小于' + min))
  } else if (Number.isInteger(max) && max < value.length) {
    callback(new Error('该值长度不能大于' + max))
  }
  callback()
}
/* element表单验证 required 是否必须 、 type ：[str: 字符串、 number: 数值、 float: 浮点数、 phone：手机号、 url： url、 email： 邮箱地址] */
export function validateForEleForm ([required, type, min, max, decimalLen]) {
  return (rule, value, callback) => {
    if (!value || value === '') {
      if (required) {
        callback(new Error('该值不能为空'))
      }
    }
    if (type) {
      switch (type) {
        case 'str':
          validateMoreOrLessForStr(value, callback, min, max)
          break
        case 'number':
          validateNumber(value, callback, min, max)
          break
        case 'float':
          validateFloat(value, callback, min, max, decimalLen)
          break
        case 'phone':
          if (value && !validateMobile(value)) {
            callback(new Error('请输入正确的电话类型'))
          } else {
            callback()
          }
          break
        case 'url':
          if (!validateURL(value)) {
            callback(new Error('请输入正确的url类型'))
          } else {
            callback()
          }
          break
        case 'email':
          if (!validatemailBox(value)) {
            callback(new Error('请输入正确的邮箱类型'))
          } else {
            callback()
          }
          break
        case 'connect':
          if (!validatemailBox(value)) {
            callback(new Error('请输入正确的联系方式类型'))
          } else {
            callback()
          }
          break
        default:
          callback(new Error('请检查字段设置类型'))
      }
    }
    callback()
  }
}

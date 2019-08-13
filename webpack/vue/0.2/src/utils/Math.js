var types = ['Array', 'Boolean', 'Date', 'Number', 'Object', 'RegExp', 'String', 'Window', 'HTMLDocument']
var is = {}// 判断是否是某种类型
for (let i = 0; i < types.length; i++) {
  let c = types[i]
  is[c] = (function (type) {
    return function (obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']'
    }
  })(c)
}
var tools = {}
tools.dateFormat = (date, fmt) => {
  if (!is.Date(date)) {
    var o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      'S': this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      return fmt
    }
  }
}

// 数学的加减乘除=》add sub multi dev
let math = {
  /**
   * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
   *
   * @param num1加数1 | num2加数2
   */
  numAdd (num1, num2) {
    var baseNum, baseNum1, baseNum2
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    return (num1 * baseNum + num2 * baseNum) / baseNum
  },
  /**
   * 加法运算，避免数据相减小数点后产生多位数和计算精度损失。
   *
   * @param num1被减数 | num2减数
   */
  numSub (num1, num2) {
    var baseNum, baseNum1, baseNum2
    var precision// 精度
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision)
  },
  /**
   * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
   *
   * @param num1被乘数 | num2乘数
   */
  numMulti (num1, num2) {
    var baseNum = 0
    try {
      baseNum += num1.toString().split('.')[1].length
    } catch (e) {
    }
    try {
      baseNum += num2.toString().split('.')[1].length
    } catch (e) {
    }
    return Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', '')) / Math.pow(10, baseNum)
  },
  /**
   * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
   *
   * @param num1被除数 | num2除数
   */
  numDiv (num1, num2) {
    var baseNum1 = 0
    var baseNum2 = 0
    var baseNum3, baseNum4
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum3 = Number(num1.toString().replace('.', ''))
    baseNum4 = Number(num2.toString().replace('.', ''))
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)
  }
}
tools.math = math

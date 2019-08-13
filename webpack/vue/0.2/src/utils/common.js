// 存储新搜索关键字
export function checkPublicDataExpired (dataType) {
  // 过期时间 2周
  const expiredTime = 1209600
  let localTimestamp = localStorage.getItem('jf-publicData-' + dataType + '-timestamp')
  let nowTimestamp = Math.round(new Date().getTime() / 1000)
  if (localTimestamp + expiredTime <= nowTimestamp) {
    // 如果过期 从服务器更新数据
    return true
  } else {
    return false
  }
}

// 检查新搜索关键字是否需要存储
export function checkHistorySearch (keyword) {
  let searchHistory = JSON.parse(localStorage.getItem('jf-search-history'))
  // 存储本地历史记录
  if (searchHistory) {
    let needSave = true
    // 检查关键字是否重复
    for (let word in searchHistory) {
      if (keyword === searchHistory[word]) {
        needSave = false
        break
      }
    }
    if (needSave) {
      // 不重复进行存储处理
      setHistorySearch(keyword)
    }
  } else {
    // 没有记录新建数组
    let searchHistory = []
    searchHistory.push(keyword)
    console.log(searchHistory)
    localStorage.setItem('jf-search-history', JSON.stringify(searchHistory))
  }
}

// 存储新搜索关键字
export function setHistorySearch (keyword) {
  let newSearchHistory = JSON.parse(localStorage.getItem('jf-search-history'))
  // 最新的放在数组开头
  newSearchHistory.unshift(keyword)
  // 最多存储记录数
  let maxNum = 9
  // 超出时移除最后一条记录
  if (newSearchHistory.length >= maxNum) {
    newSearchHistory.splice(maxNum, 1)
  }
  localStorage.setItem('jf-search-history', JSON.stringify(newSearchHistory))
}

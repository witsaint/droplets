import store from '../store'
import router from './router'

import nimConfig from '../config/nim'

import { Toast } from 'mint-ui'


// socket初始化
export function nimInit () {
  // 根据token请求
  // let token = localStorage.getItem('jf-token')
  // let socket = new WebSocket(`wss://${location.host}/ws?token=${token}`)
  if (store.nim) {
    nim.disconnect()
  }
  let nim = SDK.NIM.getInstance({
    // debug: true && { api: 'info', style: 'font-size:12px;color:blue;background-color:rgba(0,0,0,0.1)' },
    appKey: nimConfig.appkey,
    account: store.getters.accId,
    token: store.getters.nimToken,
    db: false,
    syncSessionUnread: true,
    syncRobots: true,
    autoMarkRead: true, // 默认为true
    onconnect: function onConnect(event) {
      store.commit('SET_NIM', nim)
    },
    onerror: function onError(event) {
      // alert(JSON.stringify(event))
      console.log(event)
    },
    onwillreconnect: function onWillReconnect() {
      console.log(event)
    },
    ondisconnect: function onDisconnect(error) {
      console.log(error)
      switch (error.code) {
        // 账号或者密码错误, 请跳转到登录页面并提示错误
        case 302:
          break
        default:
          break
      }
    },
    // // 用户资料
    // onusers: _this.onUserInfo,
    // onupdateuser: _this.onUserInfo,
    // 会话
    onsessions: onSessions,
    onupdatesession: onUpdateSession,
    // 消息
    onmsg: handleNewMessage,
    onroamingmsgs: onRoamingMsgs,
    onofflinemsgs: onOfflineMsgs,
    // // 同步完成
    onsyncdone: function onSyncDone() {
      console.log('NIM同步完成')
    }
  })
}

// 发送数据
export function send (data) {
  let nim = store.getters.NIM
  nim.sendText({
    scene: 'p2p',
    to: data.to,
    text: data.content,
    done: function (error, msg) {
      console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error ? '成功' : '失败') + ', id=' + msg.idClient, error, msg)
      onMsg(msg)
    }
  })
}

// 查找会话id
export function getSessionId (accId) {
  let nim = store.getters.NIM
  let sessionList = store.getters.NIM_SESSIONLIST
  console.log(accId)
  let sessionId = 'p2p' + accId
  let result = nim.findSession(sessions, sessionId)
  console.log(result)
  return result
}

// 处理接收到的数据
function handleNewMessage (data) {
  if (router.currentRoute.name !== 'message' && router.currentRoute.name !== 'dialog') {
    Toast({
      message: '您收到了一条新私信',
      position: 'bottom'
    })
  }
  console.log(data)
  onMsg(data)
}

function formatMsg (msg) {
  return msg
}

function formatUserInfo (obj) {
  const nim = store.state.nim
  let gender = ''
  switch (obj.gender) {
    case 'male':
      gender = '男'
      break
    case 'female':
      gender = '女'
      break
    case 'unknown':
      gender = ''
      break
  }

  let custom = obj.custom || ''
  try {
    custom = JSON.parse(custom)
  } catch (e) {
    custom = {
      data: custom
    }
  }

  if (obj.avatar) {
    obj.avatar = nim.viewImageSync({
      url: obj.avatar, // 必填
      thumbnail: { // 生成缩略图， 可选填
        width: 40,
        height: 40,
        mode: 'cover'
      }
    })
    // obj.avatar += '?imageView&thumbnail=40x40&quality=85'
  } else {
    obj.avatar = config.defaultUserIcon
  }

  let result = Object.assign(obj, {
    account: obj.account,
    nick: obj.nick || '',
    avatar: obj.avatar || config.defaultUserIcon,
    birth: obj.birth || '',
    email: obj.email || '',
    tel: obj.tel || '',
    gender,
    sign: obj.sign || '',
    custom,
    createTime: obj.createTime || (new Date()).getTime(),
    updateTime: obj.updateTime || (new Date()).getTime()
  })

  return result
}

function onMsg (msg) {
  // let formatMsg = formatMsg(msg)
  let formatMsg = msg
  store.commit('putMsg', formatMsg)
  if (msg.sessionId === store.state.chat.currSessionId) {
    store.commit('updateCurrSessionMsgs', {
      type: 'put',
      msg
    })
    // 发送已读回执
    // store.dispatch('sendMsgReceipt')
  }
}

function updateSessionAccount (sessions) {
  let accountsNeedSearch = []
  sessions.forEach(item => {
    if (item.scene === 'p2p') {
      // 如果不存在缓存资料
      if (!store.state.chat.userInfos[item.to]) {
        accountsNeedSearch.push(item.to)
      }
    }
  })
  if (accountsNeedSearch.length > 0) {
    store.dispatch('searchUsers', {
      accounts: accountsNeedSearch
    })
  }
}

function onSessions (sessions) {
  updateSessionAccount(sessions)
  store.commit('updateSessions', sessions)
}

function onUpdateSession (session) {
  let sessions = [session]
  updateSessionAccount(sessions)
  store.commit('updateSessions', sessions)
}

function onRoamingMsgs (obj) {
  let msgs = obj.msgs.map(msg => {
    // return formatMsg(msg)
    return msg
  })
  store.commit('updateMsgs', msgs)
}

function onOfflineMsgs (obj) {
  let msgs = obj.msgs.map(msg => {
    // return formatMsg(msg)
    return msg
  })
  store.commit('updateMsgs', msgs)
}

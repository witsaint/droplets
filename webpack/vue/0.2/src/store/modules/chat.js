import store from '@/store'
import nimConfig from '@/config/nim'
import global from '@/utils/global'

const chat = {
  state: {
    // IM相关
    // NIM SDK 实例
    nim: null,
    // 登录账户ID
    userUID: null,
    // 用户名片
    myInfo: {},
    // 好友/黑名单/陌生人名片, 数据结构如：{cid: {attr: ...}, ...}
    userInfos: {},

    // 好友列表
    friendslist: [],

    // 消息列表
    msgs: {}, // 以sessionId作为key
    msgsMap: {}, // 以idClient作为key，诸如消息撤回等的消息查找
    // 会话列表
    sessionlist: [],
    sessionMap: {},
    // 会话未读数
    sessionUnread: 0,
    // 当前会话ID（即当前聊天列表，只有单聊群聊采用，可用于判别）
    currSessionId: null,
    currSessionMsgs: [],
    // 是否有更多历史消息，用于上拉加载更多
    noMoreHistoryMsgs: false,
    loadingHistory: false,

    // 系统消息
    sysMsgs: [],
    customSysMsgs: [],
    sysMsgUnread: {
      total: 0
    },
    customSysMsgUnread: 0,

    // 聊天室相关
    // 聊天室sdk实例
    chatroomInsts: {},
    chatroomInfos: {},
    // 聊天室分房间消息集合
    chatroomMsgs: {},
    // 当前聊天室实例及id
    currChatroom: null,
    currChatroomId: null,
    currChatroomMsgs: [],
    currChatroomInfo: {},
    // 聊天室成员列表
    currChatroomMembers: []
  },

  mutations: {
    SET_NIM (state, data) {
      state.nim = data
    },
    updateMyInfo (state, myInfo) {
      state.myInfo = global.mergeObject(state.myInfo, myInfo)
    },
    updateUserInfo (state, users) {
      let userInfos = state.userInfos
      users.forEach(user => {
        let account = user.account
        if (account) {
          userInfos[account] = global.mergeObject(userInfos[account], user)
        }
      })
      state.userInfos = global.mergeObject(state.userInfos, userInfos)
      console.log(state.userInfos)
    },
    // 初始化，收到离线漫游消息时调用
    updateMsgs (state, msgs) {
      const nim = state.nim
      let tempSessionMap = {}
      msgs.forEach(msg => {
        let sessionId = msg.sessionId
        tempSessionMap[sessionId] = true
        if (!state.msgs[sessionId]) {
          state.msgs[sessionId] = []
        }
        // sdk会做消息去重
        state.msgs[sessionId] = nim.mergeMsgs(state.msgs[sessionId], [msg])
        // state.msgs[sessionId].push(msg)
      })
      // store.commit('updateMsgByIdClient', msgs)
      for (let sessionId in tempSessionMap) {
        state.msgs[sessionId].sort((a, b) => {
          if (a.time === b.time) {
            // 机器人消息，回复消息时间和提问消息时间相同，提问在前，回复在后
            if (a.type === 'robot' && b.type === 'robot') {
              if (a.content && a.content.msgOut) {
                return 1
              }
              if (b.content && b.content.msgOut) {
                return -1
              }
            }
          }
          return a.time - b.time
        })
        if (sessionId === state.currSessionId) {
          store.commit('updateCurrSessionMsgs', {
            type: 'init'
          })
        }
      }
    },
    putMsg (state, msg) {
      let sessionId = msg.sessionId
      if (!state.msgs[sessionId]) {
        state.msgs[sessionId] = []
      }
      // store.commit('updateMsgByIdClient', msg)
      let tempMsgs = state.msgs[sessionId]
      let lastMsgIndex = tempMsgs.length - 1
      if (tempMsgs.length === 0 || msg.time >= tempMsgs[lastMsgIndex].time) {
        tempMsgs.push(msg)
      } else {
        for (let i = lastMsgIndex; i >= 0; i--) {
          let currMsg = tempMsgs[i]
          if (msg.time >= currMsg.time) {
            state.msgs[sessionId].splice(i, 0, msg)
            break
          }
        }
      }
    },
    updateSessions (state, sessions) {
      const nim = state.nim
      state.sessionlist = nim.mergeSessions(state.sessionlist, sessions)
      state.sessionlist = state.sessionlist.filter(item => {
        if (/^team-/.test(item.id)) {
          return false
        }
        return true
      })
      state.sessionlist.sort((a, b) => {
        return b.updateTime - a.updateTime
      })
      state.sessionlist.forEach(item => {
        state.sessionMap[item.id] = item
      })
    },
    // 更新当前会话id，用于唯一判定是否在current session状态
    updateCurrSessionId (state, obj) {
      let type = obj.type || ''
      if (type === 'destroy') {
        state.currSessionId = null
      } else if (type === 'init') {
        if (obj.sessionId && (obj.sessionId !== state.currSessionId)) {
          state.currSessionId = obj.sessionId
        }
      }
    },
    // 更新当前会话列表的聊天记录，包括历史消息、单聊消息等，不包括聊天室消息
    // replace: 替换idClient的消息
    updateCurrSessionMsgs (state, obj) {
      let type = obj.type || ''
      if (type === 'destroy') { // 清空会话消息
        state.currSessionMsgs = []
        state.currSessionLastMsg = null
        store.commit('updateCurrSessionId', {
          type: 'destroy'
        })
        // 重置无更多历史记录标记
        store.commit('setNoMoreHistoryMsgs', false)
      } else if (type === 'init') { // 初始化会话消息列表
        if (state.currSessionId) {
          let sessionId = state.currSessionId
          let currSessionMsgs = [].concat(state.msgs[sessionId] || [])
          // 做消息截断
          let limit = nimConfig.localMsglimit
          let msgLen = currSessionMsgs.length
          if (msgLen - limit > 0) {
            state.currSessionLastMsg = currSessionMsgs[msgLen - limit]
            currSessionMsgs = currSessionMsgs.slice(msgLen - limit, msgLen)
          } else if (msgLen > 0) {
            state.currSessionLastMsg = currSessionMsgs[0]
          } else {
            state.currSessionLastMsg = null
          }
          state.currSessionMsgs = []
          let lastMsgTime = 0
          currSessionMsgs.forEach(msg => {
            if ((msg.time - lastMsgTime) > 1000 * 60 * 5) {
              lastMsgTime = msg.time
              state.currSessionMsgs.push({
                type: 'timeTag',
                text: global.formatTime(msg.time, 'chat', 'js')
              })
            }
            state.currSessionMsgs.push(msg)
          })
        }
      } else if (type === 'put') { // 追加一条消息
        let newMsg = obj.msg
        let lastMsgTime = 0
        let lenCurrMsgs = state.currSessionMsgs.length
        if (lenCurrMsgs > 0) {
          lastMsgTime = state.currSessionMsgs[lenCurrMsgs - 1].time
        }
        if (newMsg) {
          console.log(newMsg)
          if ((newMsg.time - lastMsgTime) > 1000 * 60 * 5) {
            state.currSessionMsgs.push({
              type: 'timeTag',
              text: global.formatTime(newMsg.time, 'chat', 'js')
            })
          }
          state.currSessionMsgs.push(newMsg)
        }
      } else if (type === 'concat') {
        // 一般用于历史消息拼接
        let currSessionMsgs = []
        let lastMsgTime = 0
        obj.msgs.forEach(msg => {
          if ((msg.time - lastMsgTime) > 1000 * 60 * 5) {
            lastMsgTime = msg.time
            currSessionMsgs.push({
              type: 'timeTag',
              text: global.formatTime(msg.time, 'chat', 'js')
            })
          }
          currSessionMsgs.push(msg)
        })
        currSessionMsgs.reverse()
        currSessionMsgs.forEach(msg => {
          state.currSessionMsgs.unshift(msg)
        })
        if (obj.msgs[0]) {
          state.currSessionLastMsg = obj.msgs[0]
        }
      } else if (type === 'replace') {
        let msgLen = state.currSessionMsgs.length
        let lastMsgIndex = msgLen - 1
        if (msgLen > 0) {
          for (let i = lastMsgIndex; i >= 0; i--) {
            if (state.currSessionMsgs[i].idClient === obj.idClient) {
              state.currSessionMsgs.splice(i, 1, obj.msg)
              break
            }
          }
        }
      }
    },
    setNoMoreHistoryMsgs (state, status) {
      state.noMoreHistoryMsgs = status
    },
    set_loadingHistory (state, status) {
      state.loadingHistory = status
    }
  },

  getters: {
    NIM: state => state.nim,
    NEW_MESSAGE: state => state.newMessage,
    NIM_SESSIONLIST: state => state.sessionlist,
    NIM_USERINFO: state => state.userInfos,
    // 获取会话未读数量
    NIM_SESSIONLIST_UNREAD: state => {
      let unreadNum = 0
      state.sessionlist.forEach(session => {
        console.log(session.unread)
        unreadNum += session.unread
      })
      return unreadNum
    },
    NIM_NOMOREHISTORYMSGS: state => state.noMoreHistoryMsgs,
    NIM_LOADINGHISTORY: state => state.loadingHistory
  },

  actions: {
    setCurrSession ({ state, commit, dispatch }, sessionId) {
      const nim = state.nim
      if (sessionId) {
        commit('updateCurrSessionId', {
          type: 'init',
          sessionId
        })
        if (nim) {
          // 如果在聊天页面刷新，此时还没有nim实例，需要在onSessions里同步
          nim.setCurrSession(sessionId)
          commit('updateCurrSessionMsgs', {
            type: 'init',
            sessionId
          })
          // 发送已读回执
          // dispatch('sendMsgReceipt')
        }
      }
    },
    resetCurrSession ({ state, commit }) {
      const nim = state.nim
      nim.resetCurrSession()
      commit('updateCurrSessionMsgs', {
        type: 'destroy'
      })
    },
    searchUsers ({ state, commit }, obj) {
      let { accounts, done } = obj
      const nim = state.nim
      if (!Array.isArray(accounts)) {
        accounts = [accounts]
      }
      nim.getUsers({
        accounts,
        done: function searchUsersDone (error, users) {
          if (error) {
            alert(error)
            return
          }
          // commit('updateSearchlist', {
          //   type: 'user',
          //   list: users
          // })
          let updateUsers = users.filter(item => {
            let account = item.account
            if (item.account === state.userUID) {
              return false
            }
            let userInfo = state.userInfos[account] || {}
            if (userInfo.isFriend) {
              return false
            }
            return true
          })
          updateUsers = updateUsers.map(item => {
            // return formatUserInfo (item)
            return item
          })
          commit('updateUserInfo', updateUsers)
          if (done instanceof Function) {
            done(users)
          }
        }
      })
    },
    getHistoryMsgs ({ state, commit }, obj) {
      commit('set_loadingHistory', true)
      const nim = state.nim
      if (nim) {
        let { scene, to } = obj
        let options = {
          scene,
          to,
          reverse: false,
          asc: true,
          limit: nimConfig.localMsglimit || 20,
          done: function getHistoryMsgsDone (error, obj) {
            if (error) {
              console.log(error)
            }
            if (obj.msgs) {
              if (obj.msgs.length === 0) {
                // 拉取不到消息 设置无更多历史记录标记
                commit('setNoMoreHistoryMsgs', true)
              } else {
                let msgs = obj.msgs.map(msg => {
                  return msg
                })
                commit('updateCurrSessionMsgs', {
                  type: 'concat',
                  msgs: msgs
                })
              }
            }
            commit('set_loadingHistory', false)
          }
        }
        if (state.currSessionLastMsg) {
          options = Object.assign(options, {
            lastMsgId: state.currSessionLastMsg.idServer,
            endTime: state.currSessionLastMsg.time
          })
        }
        nim.getHistoryMsgs(options)
      }
    }

  }
}

export default chat

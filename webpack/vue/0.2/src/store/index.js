import Vue from 'vue'
import Vuex from 'vuex'

// 根级别store方法
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

// 模块
import issue from './modules/issue'
import screen from './modules/screen'
import user from './modules/user'
import chat from './modules/chat'

Vue.use(Vuex)

const state = {
  count: 0,
  city: '上海',
  district: '',
  cityCode: '',
  forumActiveTab: 'forumHot',
  interlocutionActiveTab: 'question',
  loginRedirect: '/my',
  iosLandingPage: 'http://t.94ym.cn',
  routerChangeCount: 0
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    issue: issue,
    screen: screen,
    user: user,
    chat: chat
  }
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store

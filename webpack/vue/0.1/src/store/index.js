import Vue from 'vue'
import Vuex from 'vuex'

// 根级别store方法
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 模块
import tabs from './modules/tab'
Vue.use(Vuex)
const state = {
  searchForm: {},
  menu: false,
  excludeRouter: '/'
}
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    tabs: tabs
  }
})

export default store

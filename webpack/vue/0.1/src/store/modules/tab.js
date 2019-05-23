const idx = {
  state: {
    tabs: [],
    currentTab: '',
    excludeTab: [],
    keep: true
  },
  mutations: {
    SET_CURRENT_TAB: (state, tab) => {
      state.currentTab = tab
    },
    SET_TABS: (state, tabs) => {
      state.tabs = tabs
    },
    ADD_TABS: (state, tab) => {
      state.tabs.push(tab)
    },
    SPLICE_TAB: (state, tabIdx) => {
      state.tabs.splice(tabIdx, 1)
    },
    DELETE_TABS: (state) => {
      state.tabs = []
    },
    ADD_EX_TAB: (state, tab) => {
      state.excludeTab.push(tab)
    },
    POP_EX_TAB: (state, tab) => {
      let idx = state.excludeTab.findIndex(val => { return val.url === tab.url })
      state.excludeTab.splice(idx, 1)
    },
    SET_EX_TAB: (state, tab) => {
      state.excludeTab = tab
    },
    SET_KEEP: (state, keep) => {
      state.keep = keep
    }
  },
  actions: {
    newTab ({ commit, state }, tab) {
      state.tabs.findIndex(val => { return val.url === tab.url }) === -1 && commit('ADD_TABS', tab)
      commit('SET_CURRENT_TAB', tab)
    }
  }
}
export default idx

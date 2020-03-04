export default {
  state: {},
  mutations: {
    SET_TEST: (state, v) => {
      state.test = v
    }
  },
  actions: {
    newTab ({ commit, state }, tab) {
      // state.tabs
      // commit('SET_TEST', tab)
    }
  },
}

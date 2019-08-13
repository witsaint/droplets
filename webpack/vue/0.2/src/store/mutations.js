const mutations = {
  setCity (state, cityData) {
    state.city = cityData.city
    state.district = cityData.district
    state.cityCode = cityData.adcode
  },
  setForumActiveTab (state, tab) {
    state.forumActiveTab = tab
  },
  setInterlocutionActiveTab (state, tab) {
    state.interlocutionActiveTab = tab
  },
  setLoginRedirect (state, path) {
    // TODO 拦截一次加载多tab导致的问题
    if (path === '/login/byPass') {
      return
    }
    state.loginRedirect = path
  },
  addRouterChangeCount (state) {
    state.routerChangeCount++
  },
  SET_IOS_LANDINGPAGE (state, url) {
    state.iosLandingPage = url
  }
}
export default mutations

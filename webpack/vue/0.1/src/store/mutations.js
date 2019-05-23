const mutations = {
  setDemo (state, cityData) {
    state.city = cityData.city
    state.district = cityData.district
    state.cityCode = cityData.adcode
  },
  INIT_FORM (state, ref) {
    state.searchForm = ref
  },
  SET_MENU (state, ifShow) {
    state.menu = ifShow
  },
  SET_EXCLUDE_ROUTER (state, er) {
    state.excludeRouter = er
  }
}
export default mutations

const screen = {
  state: {
    hospitalAreaId: '',
    productAreaId: '',
    hospitalSortType: '',
    productSortType: '',
    productItem: '',
    hospitalCity: {
      text: '',
      value: ''
    },
    productCity: {
      text: '',
      value: ''
    }
  },

  mutations: {
    init_screen_city (state, city) {
      state.hospitalCity.text = city.text
      state.hospitalCity.value = city.value
      state.productCity.text = city.text
      state.productCity.value = city.value
    },

    set_screen_productArea (state, areaId) {
      state.productAreaId = areaId
    },
    clear_screen_productArea (state, areaId) {
      state.productAreaId = ''
    },

    set_screen_productItem (state, item) {
      state.productItem = item
    },
    clear_screen_productItem (state, item) {
      state.productItem = ''
    },

    set_screen_hospitalArea (state, areaId) {
      state.hospitalAreaId = areaId
    },
    clear_screen_hospitalArea (state, areaId) {
      state.hospitalAreaId = ''
    },

    set_screen_hospitalSort (state, sortType) {
      state.sortType = sortType
    },
    set_screen_productSort (state, sortType) {
      state.sortType = sortType
    }
  },

  getters: {
  },

  actions: {}
}

export default screen

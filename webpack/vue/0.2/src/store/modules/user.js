import { nimInit } from '@/utils/chat'

const user = {
  state: {
    token: '',
    userId: -1,
    nickname: '',
    mobile: '',
    age: '',
    gender: '0',
    icon: '',
    cityName: '',
    cityIndex: '',
    provinceIndex: '',
    areaId: '',
    nimToken: '',
    accId: ''
  },

  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUserId (state, userId) {
      state.userId = userId
    },
    setNickname (state, nickname) {
      state.nickname = nickname
    },
    setMobile (state, mobile) {
      state.mobile = mobile
    },
    setAge (state, age) {
      state.age = age
    },
    setGender (state, gender) {
      state.gender = gender
    },
    setIcon (state, icon) {
      state.icon = icon
    },
    setArea (state, area) {
      state.cityName = area.cityName
      state.cityIndex = area.cityIndex
      state.provinceIndex = area.provinceIndex
    },

    setUser (state, user) {
      state.token = user.token
      state.userId = user.user_id
      state.nickname = user.nickname
      state.mobile = user.mobile
      state.age = user.age
      state.gender = user.gender
      state.icon = user.icon
      state.areaId = user.area_id
      state.nimToken = user.yunxin_token
      state.accId = user.yunxin_accid
      // 储存用户基础信息后 初始化网易云聊天
      nimInit()
    },

    clearUser (state) {
      state.token = ''
      state.userId = -1
      state.nickname = ''
      state.mobile = ''
      state.age = ''
      state.gender = '女'
      state.icon = ''
      state.cityName = ''
      state.cityIndex = ''
      state.provinceIndex = ''
      state.areaId = ''
      state.nimToken = ''
      state.accId = ''
    }
  },

  getters: {
    token: state => state.token,
    userId: state => state.userId,
    nickname: state => state.nickname,
    mobile: state => state.mobile,
    age: state => state.age,
    icon: state => state.icon,
    cityName: state => state.cityName,
    cityIndex: state => state.cityIndex,
    provinceIndex: state => state.provinceIndex,
    accId: state => state.accId,
    nimToken: state => state.nimToken,
    ageText: state => {
      let ageText = ''
      switch (state.age) {
        case '1': ageText = '18-19岁'
          break
        case '2': ageText = '20-25岁'
          break
        case '3': ageText = '26-30岁'
          break
        case '4': ageText = '31-35岁'
          break
        case '5': ageText = '36-40岁'
          break
        case '6': ageText = '41-45岁'
          break
        case '7': ageText = '46-50岁'
          break
        case '8': ageText = '51-55岁'
          break
        case '9': ageText = '56-60岁'
          break
        case '10': ageText = '60岁以上'
          break
        default: ageText = '未知'
          break
      }
      return ageText
    },
    gender: state => state.gender,
    genderText: state => {
      let genderText = ''
      switch (Number(state.gender)) {
        case 1: genderText = '男'
          break
        default: genderText = '女'
          break
      }
      return genderText
    }
  },

  actions: {}
}

export default user

const issue = {
  state: {
    newSeries: {
      item: '',
      operationDate: '2010-01-01',
      hospitalId: '',
      hospitalName: '请选择医院',
      imagesList: []
    },
    newDiary: {
      tagsName: [],
      tagsId: [],
      imagesList: [],
      afterDayData: '',
      content: ''
    },
    newPost: {
      tagsId: [],
      tagsName: [],
      imagesList: [],
      content: '',
      title: ''
    }
  },

  mutations: {
    set_newSeries_item: (state, item) => {
      state.newSeries.item = item
    },
    set_newSeries_operationDate: (state, date) => {
      state.newSeries.operationDate = date
    },
    set_newSeries_hospitalId: (state, hospitalId) => {
      state.newSeries.hospitalId = hospitalId
    },
    set_newSeries_hospitalName: (state, hospitalName) => {
      state.newSeries.hospitalName = hospitalName
    },
    add_newSeries_imagesList: (state, imgData) => {
      state.newSeries.imagesList.push(imgData)
    },
    del_newSeries_image: (state, id) => {
      let imagesList = state.newSeries.imagesList
      for (let k in imagesList) {
        if (imagesList[k].id === id) {
          imagesList.splice(k, 1)
          break
        }
      }
    },
    clear_newSeries: (state) => {
      state.newSeries.item = ''
      state.newSeries.operationDate = '2010-01-01'
      state.newSeries.hospitalId = ''
      state.newSeries.hospitalName = '请选择医院'
      state.newSeries.imagesList = []
    },

    set_newDiary_tagsName: (state, tagsName) => {
      state.newDiary.tagsName = tagsName
    },
    set_newDiary_tagsId: (state, tagsId) => {
      state.newDiary.tagsId = tagsId
    },
    set_newDiary_afterDayData: (state, data) => {
      state.newDiary.afterDayData = data
    },
    set_newDiary_content: (state, content) => {
      state.newDiary.content = content
    },
    add_newDiary_imagesList: (state, imgData) => {
      state.newDiary.imagesList.push(imgData)
    },
    del_newDiary_image: (state, id) => {
      let imagesList = state.newDiary.imagesList
      for (let k in imagesList) {
        if (imagesList[k].id === id) {
          imagesList.splice(k, 1)
          break
        }
      }
    },
    clear_newDiary: (state) => {
      state.newDiary.tagsName = []
      state.newDiary.tagsId = []
      state.newDiary.imagesList = []
      state.newDiary.afterDayData = ''
      state.newDiary.content = ''
    },

    set_newPost_tagsId: (state, tagsId) => {
      state.newPost.tagsId = tagsId
    },
    set_newPost_tagsName: (state, tagsName) => {
      state.newPost.tagsName = tagsName
    },
    set_newPost_title: (state, title) => {
      state.newPost.title = title
    },
    set_newPost_content: (state, content) => {
      state.newPost.content = content
    },
    add_newPost_imagesList: (state, imgData) => {
      state.newPost.imagesList.push(imgData)
    },
    del_newPost_image: (state, id) => {
      let imagesList = state.newPost.imagesList
      for (let k in imagesList) {
        if (imagesList[k].id === id) {
          imagesList.splice(k, 1)
          break
        }
      }
    },
    clear_newPost: (state) => {
      state.newPost.tagsName = []
      state.newPost.tagsId = []
      state.newPost.imagesList = []
      state.newPost.content = ''
      state.newPost.title = ''
    }
  },

  getters: {
    GET_NEW_SERIES_OPERTION: (state) => {
      if (state.newSeries.operationDate === '2010-01-01') {
        return new Date()
      }
      return state.newSeries.operationDate
    },
    GET_NEWSERIES_IMAGEID: (state) => {
      let imgIdArr = []
      for (let k in state.newSeries.imagesList) {
        imgIdArr.push(state.newSeries.imagesList[k].id)
      }
      return imgIdArr.join(',')
    },
    GET_NEWDIARY_IMAGEID: (state) => {
      let imgIdArr = []
      for (let k in state.newDiary.imagesList) {
        imgIdArr.push(state.newDiary.imagesList[k].id)
      }
      return imgIdArr.join(',')
    },
    GET_NEWPOST_IMAGEID: (state) => {
      let imgIdArr = []
      for (let k in state.newPost.imagesList) {
        imgIdArr.push(state.newPost.imagesList[k].id)
      }
      return imgIdArr.join(',')
    }
    // newSeries_itemName: state => state.newSeries.itemName,
    // newSeries_hospitalName: state => state.newSeries.hospitalName
  },

  actions: {}
}

export default issue

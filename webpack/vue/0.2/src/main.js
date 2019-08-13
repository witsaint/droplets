import Vue from 'vue'
import router from './utils/router'
import App from './App'
import Mint from 'mint-ui'
import store from './store'
import global from './utils/global'

import * as filters from './Vue/filters'
import * as directive from './Vue/directive'

import 'mint-ui/lib/style.css'

// 全局使用vux的基础弹窗和加载组件
import { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

Vue.use(Mint)

Vue.config.productionTip = false

/* 自定义指令 */
Object.keys(directive).forEach(funcName => {
  Vue.filter(funcName, directive[funcName])
})
/* filters 过滤器 */
Object.keys(filters).forEach(funcName => {
  Vue.filter(funcName, filters[funcName])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.prototype.$global = global


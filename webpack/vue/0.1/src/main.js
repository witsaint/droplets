import Vue from 'vue'
// import router from './utils/router'
import router from './router'
import store from './store'
import App from './App'
import ui from 'fdk-ui'
import 'fdk-ui/lib/style/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './Vue/filters'
import * as directive from './Vue/directive'
/* eslint-disable */

/* 自定义指令 */
Object.keys(directive).forEach(funcName => {
  Vue.filter(funcName, directive[funcName])
})
/* filters 过滤器 */
Object.keys(filters).forEach(funcName => {
  Vue.filter(funcName, filters[funcName])
})

Vue.config.productionTip = false

// 如果是ssr这里不会这种的入口方式
Vue.use(ui)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

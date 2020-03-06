import Vue from 'vue';
import router from './router';
import store from "./store";
import * as directive from './vue/directive';
import * as filters from './vue/filters';
import getComponents from './vue/components';
import App from './App';

import asyncRoute from './router/asnyc';

import './assets/style/common.less';

Vue.config.productionTip = false;

getComponents();
console.log('da');

/* 自定义指令 */
Object.keys(directive).forEach((funcName) => {
  Vue.filter(funcName, directive[funcName]);
});
/* filters 过滤器 */
Object.keys(filters).forEach((funcName) => {
  Vue.filter(funcName, filters[funcName]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

// asyncRoute();
Vue.prototype.$global = global;

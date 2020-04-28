import Vue from 'vue';
import router, { constantRouterMap } from './router';
import store from "./store";
import * as directive from './vue/directive';
import * as filters from './vue/filters';

import './assets/style/common.less';

Vue.config.productionTip = false;


const register = () => ({
  router: constantRouterMap,
  directive,
  filters,
  store,
});
if (module.hot) {
  module.hot.accept();
  window.hotReloadSubApp && window.hotReloadSubApp();
  console.info('热更新了。。。。');
}
export default register;

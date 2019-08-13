/**
 * 路由配置
 * 1:children决定了是否是嵌套路由，由上级的component指定this.props.children
 * 2:如果是嵌套路由，上级路由提供的component不提供路由单独页面
 * 3:‘/’不建议禁止放在前面以免污染后续路由匹配
 */
// import BaseLayout from '../components/layout';

import HomePage from '../pages/index';
import CCPage from '../pages/css_demo/c_c';
import PromisePage from '../pages/js_demo/promise_demo';
import LLPage from '../pages/ll/index';
import RequestPage from '../pages/js_demo/request';
import ThisDemoPage from '../pages/js_demo/this_demo';
// import Login from '../pages/auth/login';

export default [
  // {
  //   path: '/login',
  //   component: Login,
  // },
  // {
  //   path: '/',
  //   component: BaseLayout,
  //   children: [{
  //     path: '/',
  //     component: HomePage,
  //   }],
  // },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/c_c',
    component: CCPage,
  },
  {
    path: '/promise-page',
    component: PromisePage,
  },
  {
    path: '/ll-page',
    component: LLPage,
  },
  {
    path: '/request-page',
    component: RequestPage,
  },
  {
    path: '/this-page',
    component: ThisDemoPage,
  },
];

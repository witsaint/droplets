/**
 * 路由配置
 * 1:children决定了是否是嵌套路由，由上级的component指定this.props.children
 * 2:如果是嵌套路由，上级路由提供的component不提供路由单独页面
 * 3:‘/’不建议禁止放在前面以免污染后续路由匹配
 */
import BaseLayout from '../components/layout';

import HomePage from '../pages/index';
import Login from '../pages/auth/login';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: BaseLayout,
    children: [{
      path: '/',
      component: HomePage,
    }],
  },
];

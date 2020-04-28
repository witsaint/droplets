import Vue from 'vue';
import Router from 'vue-router';
import Base from '../layout';
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/page/index');

Vue.use(Router);
export const constantRouterMap = [
  {
    path: '/',
    meta: { noCache: true, title: '首页' },
    component: Base,
    children: [{
      path: '',
      component: Home,
    }],
  },
];

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: constantRouterMap,
});

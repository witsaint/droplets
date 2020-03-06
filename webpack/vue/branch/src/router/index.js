import Vue from 'vue';
import Router from 'vue-router';
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Home = () => import('@/page/index');

Vue.use(Router);
export const constantRouterMap = [
  {
    path: '/',
    meta: { noCache: true, title: '首页' },
    scrollBehavior(to, from, savePosition) {
      if (savePosition) {
        return savePosition;
      }
      return { x: 0, y: 0 };
    },
  },
  {
    path: '/async',
    component: Home,
  },
];

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: constantRouterMap,
});

import Vue from 'vue';
import Router from 'vue-router';
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/page/index');

Vue.use(Router);
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home',
    meta: { noCache: true, title: '首页' },
    scrollBehavior(to, from, savePosition) {
      if (savePosition) {
        return savePosition;
      }
      return { x: 0, y: 0 };
    },
  },
  {
    path: '/home',
    component: Home,
    hidden: true,
  },
];

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: constantRouterMap,
});

import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// 引入分享配置

// 主入口
const Index = r => require.ensure([], () => r(require('../views/index')), 'index')
import Home from '@/views/main/home'
import testComponent from '@/views/main/testComponent'
import form from '@/views/main/form'
import authorization from '@/views/test/authorization'
import assumpsit from '@/views/test/assumpsit'
// mainTab页
Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        // TODO 待完善
        // 处理论坛的滚动记忆
        if (!to.meta.savedPosition) {
          let forumChildRouter = ['forumHot', 'forumNew', 'forumDiary', 'forumScience', 'forumOfficial']
          if (forumChildRouter.indexOf(to.name) !== -1) {
            if (document.body.scrollTop >= 264) {
              from.meta.savedPosition = document.body.scrollTop
              return {x: 0, y: 265}
            } else {
              from.meta.savedPosition = document.body.scrollTop
              return {x: 0, y: document.body.scrollTop}
            }
          }
        }
        from.meta.savedPosition = document.body.scrollTop
      }
      // return {x: 0, y: to.meta.savedPosition || 0}
    }
  },
  routes: [
    {
      path: '/',
      component: Index,
      meta: {keepAlive: true},
      redirect: '/testComponent',
      children: [
        { path: 'home', component: Home },
        { path: 'testComponent', component: testComponent },
        { path: 'form', component: form },
        {
          path: 'authorization',
          component: authorization
        },
        {
          path: 'assumpsit',
          component: assumpsit
        }
      ]
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 处理jssdk签名,兼容history模式
  if (!store.state.url) {
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (localStorage.getItem('jf-token')) {
      next()
    } else {
      // 提交store记住跳转前页面
      // 防止重置密码流程重定向错误
      next({})
    }
  } else {
    next()
  }
})

router.afterEach(route => {
  // 加载友盟+统计
  // let umengScript = document.createElement('script')
  // umengScript.type = 'text/javascript'
  // document.body.appendChild(umengScript)
  // 微信分享的相关配置
  let exceptArr = ['hospitalDetail', 'postDetail', 'doctorDetail', 'projectDetail']
  // 判断是否为微信浏览器
  var userAgent = navigator.userAgent.toLowerCase()
  if (!exceptArr[route.name] && String(userAgent.match(/MicroMessenger/i)) === 'micromessenger') {
    // 进行基础配置
  }
  // 提交路由跳转次数
  store.commit('addRouterChangeCount')
  window.scrollTo(0, 0)
})

export default router

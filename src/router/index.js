import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import playersRouter from './modules/players'
import statisticsRouter from './modules/statistics'
import operationRouter from './modules/operation'
import authorityRouter from './modules/authority'

export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path(.*)',
    component: () =>
      import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () =>
    import('@/views/login/index'),
  hidden: true
},
{
  path: '/auth-redirect',
  component: () =>
    import('@/views/login/auth-redirect'),
  hidden: true
},
{
  path: '/404',
  component: () =>
    import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () =>
    import('@/views/error-page/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/players-data/account-info'
},
{
  path: '/i18n-demo',
  component: Layout,
  redirect: '/i18n-demo',
  hidden: true,
  children: [{
    path: 'i18n-demo',
    component: () =>
      import('@/views/i18n-demo/index'),
    name: 'i18n',
    meta: { title: 'i18n', icon: 'dashboard', affix: true }
  }]
}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  playersRouter,
  statisticsRouter,
  operationRouter,
  authorityRouter,

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    hidden: true,
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [{
      path: '401',
      component: () =>
        import('@/views/error-page/401'),
      name: 'Page401',
      meta: { title: 'page401', noCache: true }
    },
    {
      path: '404',
      component: () =>
        import('@/views/error-page/404'),
      name: 'Page404',
      meta: { title: 'page404', noCache: true }
    }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

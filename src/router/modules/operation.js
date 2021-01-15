
import Layout from '@/layout'

const operationRouter = {
  path: '/operation',
  component: Layout,
  name: 'operation',
  redirect: 'noRedirect',
  meta: {
    title: 'operation',
    icon: 'el-icon-s-help'
  },
  children: [
    {
      path: 'online-announcement',
      component: () => import('@/views/operation/onlineAnnouncement'),
      name: 'onlineAnnouncement',
      meta: { title: 'onlineAnnouncement', roles: '查詢線上公告', noCache: true }
    },
    {
      path: 'deliver-item',
      component: () => import('@/views/operation/deliverItem'),
      name: 'deliverItem',
      meta: { title: 'deliverItem', roles: '查詢發送物品', noCache: true }
    },
    {
      path: 'activity-code',
      component: () => import('@/views/operation/activityCode'),
      name: 'activityCode',
      meta: { title: 'activityCode', roles: '查詢活動序號', noCache: true }
    },
    {
      path: 'account-suspension',
      component: () => import('@/views/operation/accountSuspension'),
      name: 'accountSuspension',
      meta: { title: 'accountSuspension', roles: '查詢帳號停權', noCache: true }
    }
  ]
}

export default operationRouter

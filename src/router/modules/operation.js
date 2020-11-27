
import Layout from '@/layout'

const operationRouter = {
  path: '/operation',
  component: Layout,
  name: 'operation',
  redirect: '/operation/online-announcement',
  meta: {
    title: 'operation',
    icon: 'chart'
  },
  children: [
    {
      path: 'online-announcement',
      component: () => import('@/views/operation/onlineAnnouncement'),
      name: 'onlineAnnouncement',
      meta: { title: 'onlineAnnouncement', noCache: true }
    },
    {
      path: 'deliver-item',
      component: () => import('@/views/operation/deliverItem'),
      name: 'deliverItem',
      meta: { title: 'deliverItem', noCache: true }
    },
    {
      path: 'activity-code',
      component: () => import('@/views/operation/activityCode'),
      name: 'activityCode',
      meta: { title: 'activityCode', noCache: true }
    },
    {
      path: 'account-suspension',
      component: () => import('@/views/operation/accountSuspension'),
      name: 'accountSuspension',
      meta: { title: 'accountSuspension', noCache: true }
    }
  ]
}

export default operationRouter

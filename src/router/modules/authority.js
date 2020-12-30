
import Layout from '@/layout'

const authorityRouter = {
  path: '/authority',
  component: Layout,
  name: 'authority',
  redirect: '/authority/manage-account',
  meta: {
    title: 'authority',
    icon: 'lock'
  },
  children: [
    {
      path: 'manage-account',
      component: () => import('@/views/authority/manage-account'),
      name: 'manageAccount',
      meta: { title: 'manageAccount', roles: '查詢管理帳號', noCache: true }
    },
    {
      path: 'authority-setting',
      component: () => import('@/views/authority/authority-setting'),
      name: 'authoritySetting',
      meta: { title: 'authoritySetting', roles: '查詢權限設定', noCache: true }
    }
  ]
}

export default authorityRouter

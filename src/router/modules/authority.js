
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
      component: () => import('@/views/authority/manageAccount'),
      name: 'manageAccount',
      meta: { title: 'manageAccount', noCache: true }
    },
    {
      path: 'authority-setting',
      component: () => import('@/views/authority/authoritySetting'),
      name: 'authoritySetting',
      meta: { title: 'authoritySetting', noCache: true }
    }
  ]
}

export default authorityRouter

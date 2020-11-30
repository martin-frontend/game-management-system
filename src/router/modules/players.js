
import Layout from '@/layout'

const playersRouter = {
  path: '/players-data',
  component: Layout,
  name: 'players',
  redirect: '/players/account-info',
  meta: {
    title: 'players',
    icon: 'el-icon-s-custom'
  },
  children: [
    {
      path: 'account-info',
      component: () => import('@/views/players/accountInfo'),
      name: 'accountInfo',
      meta: { title: 'accountInfo', noCache: true }
    },
    {
      path: 'game-history',
      component: () => import('@/views/players/gameHistory'),
      name: 'gameHistory',
      meta: { title: 'gameHistory', noCache: true }
    }
  ]
}

export default playersRouter

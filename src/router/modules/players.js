
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
      component: () => import('@/views/players/account-info'),
      name: 'accountInfo',
      meta: { title: 'accountInfo', roles: '查詢帳號資訊', noCache: true }
    },
    {
      path: 'game-history',
      component: () => import('@/views/players/game-history'),
      name: 'gameHistory',
      meta: { title: 'gameHistory', roles: '查詢發送物品', noCache: true }
    }
  ]
}

export default playersRouter

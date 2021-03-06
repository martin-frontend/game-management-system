
import Layout from '@/layout'

const playersRouter = {
  path: '/players-data',
  component: Layout,
  name: 'players',
  redirect: 'noRedirect',
  meta: {
    title: 'players',
    icon: 'el-icon-s-custom'
  },
  children: [
    {
      path: 'account-info',
      component: () => import('@/views/players/accountInfo'),
      name: 'accountInfo',
      meta: { title: 'accountInfo', roles: '查詢帳號資訊', noCache: true }
    },
    {
      path: 'game-history',
      component: () => import('@/views/players/gameHistory'),
      name: 'gameHistory',
      meta: { title: 'gameHistory', roles: '查詢遊戲歷程', noCache: true }
    }
  ]
}

export default playersRouter

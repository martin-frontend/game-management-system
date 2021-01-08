
import Layout from '@/layout'

const statisticsRouter = {
  path: '/statistics',
  component: Layout,
  name: 'statistics',
  redirect: '/statistics/add-account',
  meta: {
    title: 'statistics',
    icon: 'chart'
  },
  children: [
    {
      path: 'active-account',
      component: () => import('@/views/statistics/activeAccount'),
      name: 'activeAccount',
      meta: { title: 'activeAccount', roles: '查詢活躍帳戶', noCache: true }
    },
    {
      path: 'remain-statistics',
      component: () => import('@/views/statistics/remainStatistics'),
      name: 'remainStatistics',
      meta: { title: 'remainStatistics', roles: '查詢留存統計', noCache: true }
    },
    {
      path: 'revenue-premium',
      component: () => import('@/views/statistics/revenuePremium'),
      name: 'revenuePremium',
      meta: { title: 'revenuePremium', roles: '查詢營收付費', noCache: true }
    },
    {
      path: 'activity-track',
      component: () => import('@/views/statistics/activityTrack'),
      name: 'activityTrack',
      meta: { title: 'activityTrack', noCache: true }
    }
  ]
}

export default statisticsRouter

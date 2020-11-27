
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
      path: 'add-account',
      component: () => import('@/views/statistics/addAccount'),
      name: 'addAccount',
      meta: { title: 'addAccount', noCache: true }
    },
    {
      path: 'active-account',
      component: () => import('@/views/statistics/activeAccount'),
      name: 'activeAccount',
      meta: { title: 'activeAccount', noCache: true }
    },
    {
      path: 'remain-statistics',
      component: () => import('@/views/statistics/remainStatistics'),
      name: 'remainStatistics',
      meta: { title: 'remainStatistics', noCache: true }
    },
    {
      path: 'revenue-premium',
      component: () => import('@/views/statistics/revenuePremium'),
      name: 'revenuePremium',
      meta: { title: 'revenuePremium', noCache: true }
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

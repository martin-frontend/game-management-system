
import Layout from '@/layout'

const analysisRouter = {
  path: '/analysis',
  component: Layout,
  name: 'analysis',
  redirect: 'noRedirect',
  meta: {
    title: 'analysis',
    icon: 'chart'
  },
  children: [
    {
      path: 'active-account',
      component: () => import('@/views/analysis/activeAccount'),
      name: 'activeAccount',
      meta: { title: 'activeAccount', roles: '查詢活躍帳戶', noCache: true }
    },
    {
      path: 'remain-analysis',
      component: () => import('@/views/analysis/remainAnalysis'),
      name: 'remainAnalysis',
      meta: { title: 'remainAnalysis', roles: '查詢留存統計', noCache: true }
    },
    {
      path: 'revenue-premium',
      component: () => import('@/views/analysis/revenuePremium'),
      name: 'revenuePremium',
      meta: { title: 'revenuePremium', roles: '查詢營收付費', noCache: true }
    }
    // {
    //   path: 'activity-track',
    //   component: () => import('@/views/analysis/activityTrack'),
    //   name: 'activityTrack',
    //   meta: { title: 'activityTrack', noCache: true }
    // }
  ]
}

export default analysisRouter

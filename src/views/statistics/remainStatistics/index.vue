<template>
  <div class="page-container">
    <search-panel />
    <div class="table-container">
      <el-tag>留存統計</el-tag>
      <tablePanel class="account-chart" />
    </div>
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import tablePanel from './tablePanel'
export default {
  name: 'Index',
  components: { searchPanel, tablePanel },
  data() {
    return {
      tableData: {
        value: [
          { date: '03/01', amount: '334' },
          { date: '03/02', amount: '134' },
          { date: '03/03', amount: '132' },
          { date: '03/04', amount: '643' },
          { date: '03/05', amount: '553' },
          { date: '03/06', amount: '5' },
          { date: '03/07', amount: '512' },
          { date: '03/08', amount: '612' },
          { date: '03/09', amount: '63' }
        ],
        percent: [
          { date: '03/01', amount: '53' },
          { date: '03/02', amount: '20' },
          { date: '03/03', amount: '30' },
          { date: '03/04', amount: '10' },
          { date: '03/05', amount: '50' },
          { date: '03/06', amount: '24' },
          { date: '03/07', amount: '75' },
          { date: '03/08', amount: '30' },
          { date: '03/09', amount: '14' }
        ]
      }
    }
  },
  provide() {
    return {
      group: this
    }
  }
}
</script>
<style lang="scss" scoped>
.account-chart {
  width: 100%;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>

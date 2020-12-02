<template>
  <div class="page-container">
    <search-panel />
    <div class="table-container">
      <el-tag>新增帳戶</el-tag>
      <chart class="account-chart" />
      <tableData />
    </div>
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import chart from './chart'
import tableData from './tableData'
export default {
  name: 'Index',
  components: { searchPanel, chart, tableData },
  data() {
    return {
      chartData: {
        allData: [53, 422, 337, 276, 2678, 17072, 333]
      },
      tableData: [
        { date: '03/01', amount: 53 },
        { date: '03/02', amount: 422 },
        { date: '03/03', amount: 337 },
        { date: '03/04', amount: 276 },
        { date: '03/05', amount: 2678 },
        { date: '03/06', amount: 17072 },
        { date: '03/07', amount: 333 }
      ]
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

<template>
  <div class="page-container">
    <search-panel />
    <div class="table-container">
      <el-tag>活躍帳戶</el-tag>
      <chart class="account-chart" />
    </div>
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import chart from './chart'
export default {
  name: 'Index',
  components: { searchPanel, chart },
  data() {
    return {
      chartData: {
        mau: [53, 422, 337, 676, 2678, 562, 1032],
        wau: [50, 222, 333, 444, 2434, 512, 700],
        dau: [3, 200, 4, 232, 244, 50, 332]
      },
      tableData: {
        mau: [
          { date: '03/01', amount: 53 },
          { date: '03/02', amount: 422 },
          { date: '03/03', amount: 337 },
          { date: '03/04', amount: 676 },
          { date: '03/05', amount: 2678 },
          { date: '03/06', amount: 562 },
          { date: '03/07', amount: 1032 }
        ],
        wau: [
          { date: '03/01', amount: 50 },
          { date: '03/02', amount: 222 },
          { date: '03/03', amount: 333 },
          { date: '03/04', amount: 444 },
          { date: '03/05', amount: 2434 },
          { date: '03/06', amount: 512 },
          { date: '03/07', amount: 700 }
        ],
        dau: [
          { date: '03/01', amount: 3 },
          { date: '03/02', amount: 200 },
          { date: '03/03', amount: 4 },
          { date: '03/04', amount: 232 },
          { date: '03/05', amount: 244 },
          { date: '03/06', amount: 50 },
          { date: '03/07', amount: 332 }
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

<template>
  <div class="page-container">
    <search-panel @onType="handleType" />
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
      type: '',
      chartData: {
        allData: [52, 120, 21, 134, 105, 160, 42],
        androidData: [100, 222, 333, 44, 2434, 512, 1],
        iosData: [3, 5553, 4, 232, 244, 16560, 332]
      },
      tableData: [
        { date: '03/01', amount: '15423' },
        { date: '03/02', amount: '33212' },
        { date: '03/03', amount: '13144' },
        { date: '03/04', amount: '4413' },
        { date: '03/05', amount: '4132' },
        { date: '03/06', amount: '122' },
        { date: '03/07', amount: '55131' },
        { date: '03/08', amount: '52566' },
        { date: '03/09', amount: '14125' }
      ]
    }
  },
  provide() {
    return {
      group: this
    }
  },
  methods: {
    handleType(val) {
      this.type = val
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

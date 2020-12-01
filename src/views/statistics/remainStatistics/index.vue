<template>
  <div class="page-container">
    <search-panel @onType="handleType" />
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
      type: '',
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
          { date: '03/02', amount: '321' },
          { date: '03/03', amount: '13144' },
          { date: '03/04', amount: '4413' },
          { date: '03/05', amount: '443' },
          { date: '03/06', amount: '754' },
          { date: '03/07', amount: '122' },
          { date: '03/08', amount: '12' },
          { date: '03/09', amount: '531' }
        ]
      }
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

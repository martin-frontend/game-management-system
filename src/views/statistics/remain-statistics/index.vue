<template>
  <div class="page-container">
    <search-panel @onSearch="onSearch" />
    <div class="table-container">
      <el-tag>留存統計</el-tag>
      <tablePanel class="account-chart" />
    </div>
  </div>
</template>
<script>
import searchPanel from './search-panel'
import tablePanel from './table-panel'
export default {
  name: 'Index',
  components: { searchPanel, tablePanel },
  data() {
    return {
      tableData: {
        value: [],
        percent: []
      }
    }
  },
  provide() {
    return {
      group: this
    }
  },
  methods: {
    onSearch(data) {
      this.tableData = {
        value: [],
        percent: []
      }
      if (data) {
        data.forEach(element => {
          this.tableData.value.push({
            date: element.date,
            amount: element.newaccount
          })
          this.tableData.percent.push({
            date: element.date,
            amount: element.percentage
          })
        })
      }
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

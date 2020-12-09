<template>
  <div v-loading="loading" class="page-container">
    <search-panel @updatedTableData="updatedTableData" />
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
import { getAddAccount } from '@/api/statistics'

export default {
  name: 'Index',
  components: { searchPanel, chart, tableData },
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  provide() {
    return {
      group: this
    }
  },
  methods: {
    updatedTableData(formData, loading) {
      this.loading = loading
      getAddAccount(formData)
        .then((response) => {
          this.tableData = [...response.data]
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
        })
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

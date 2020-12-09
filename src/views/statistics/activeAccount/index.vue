<template>
  <div v-loading="loading" class="page-container">
    <search-panel @updatedTableData="updatedTableData" />
    <div class="table-container">
      <el-tag>活躍帳戶</el-tag>
    </div>
    <chart class="account-chart" />
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import chart from './chart'
import { getActiveAccount } from '@/api/statistics'

export default {
  name: 'Index',
  components: { searchPanel, chart },
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
      getActiveAccount(formData)
        .then((response) => {
          if (response.data === 'no data') {
            this.tableData = []
          } else {
            this.tableData = [...response.data]
          }
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

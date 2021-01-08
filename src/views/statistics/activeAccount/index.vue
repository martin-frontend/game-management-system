<template>
  <div v-loading="loading" class="page-container">
    <search-panel ref="searchPanel" @updatedTableData="updatedTableData" />
    <div class="table-container">
      <el-tag>活躍帳戶</el-tag>
    </div>
    <chart class="account-chart" />
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import chart from './chart'
import { getUserDau, getUserWau, getUserMau } from '@/api/statistics'
// import { registerLoading } from 'echarts/lib/echarts'

export default {
  name: 'Index',
  components: { searchPanel, chart },
  data() {
    return {
      loading: false,
      tableData: [],
      date: 'dau'
    }
  },
  provide() {
    return {
      group: this
    }
  },
  methods: {
    updatedTableData(formData, loading) {
      this.loading = true
      switch (this.date) {
        case 'dau':
          getUserDau(formData).then(this.callbackSuccess).catch(this.callbackError)
          break
        case 'wau':
          getUserWau(formData).then(this.callbackSuccess).catch(this.callbackError)
          break
        case 'mau':
          getUserMau(formData).then(this.callbackSuccess).catch(this.callbackError)
          break
      }
    },
    callbackSuccess(response) {
      const { data } = response
      if (data.success) {
        this.tableData = data.content
        this.tableData.sort(function(a, b) {
          return b[0] - a[0]
        })
      } else {
        this.tableData = []
        this.$message.warning(data.msg)
      }
      this.loading = false
    },
    callbackError(error) {
      console.log(error)
      this.loading = false
    },
    changeType(type) {
      this.date = type
      this.$refs.searchPanel.changeType(type)
      this.$refs.searchPanel.handleSearch()
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

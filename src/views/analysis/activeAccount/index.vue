<template>
  <div v-loading="loading" class="page-container">
    <search-panel ref="searchPanel" @updatedTableData="updatedTableData" />
    <div class="table-container">
      <el-tag>活躍帳戶</el-tag>
      <chart class="account-chart" />
      <tableData :date="date" />
    </div>
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import chart from './chart'
import tableData from './tableData'
import { getUserDau, getUserWau, getUserMau, getUserNru } from '@/api/analysis'
// import { registerLoading } from 'echarts/lib/echarts'

export default {
  name: 'Index',
  components: { searchPanel, chart, tableData },
  data() {
    return {
      loading: false,
      tableData: [],
      date: 'DAU'
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
        case 'DAU':
          getUserDau(formData).then(this.callbackSuccess).catch(this.callbackError)
          break
        case 'WAU':
          getUserWau(formData).then(this.callbackSuccess).catch(this.callbackError)
          break
        case 'MAU':
          getUserMau(formData).then(this.callbackSuccess).catch(this.callbackError)
          break
        case 'NRU':
          getUserNru(formData).then(this.callbackSuccess).catch(this.callbackError)
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
      this.tableData = []
      this.loading = false
    },
    changeType(type) {
      if (this.date === type) return
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

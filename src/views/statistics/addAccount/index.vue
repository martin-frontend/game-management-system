<template>
  <div class="page-container">
    <search-panel />
    <div class="table-container">
      <el-tag>遊戲歷程</el-tag>
      <chart class="account-chart" />
    </div>
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import chart from './chart'
export default {
  name: 'Index',
  components: { searchPanel, chart }
}
</script>
<style lang="scss" scoped>
.account-chart {
    margin-top: 50px;
     width: 100%;
    height: 100%;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>

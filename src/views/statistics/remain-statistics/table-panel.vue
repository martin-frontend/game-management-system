<template>
  <div>
    <i class="download-icon el-icon-download"></i>
    <el-tabs v-model="statistic">
      <el-tab-pane
        v-for="item in statisticOptions"
        :key="item.value"
        :label="item.label"
        :name="item.value"
      /></el-tabs>
    <tableData :statistic="statistic" />
  </div>
</template>
<script>
import tableData from './table-data'
export default {
  name: 'TablePanel',
  components: { tableData },
  data() {
    return {
      statistic: 'value',
      statisticOptions: [
        { value: 'value', label: '數值' },
        { value: 'percent', label: '百分比' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.download-icon{
  width: 100%;
  text-align: right;
}
</style>

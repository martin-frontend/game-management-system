<template>
  <div>
    <el-table :data="handleData()">
      <el-table-column property="date" label="日期" />
      <el-table-column property="amount" :label="statistic === 'value'?'數量':'百分比'" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableData',
  props: {
    statistic: {
      type: String,
      default: ''
    }
  },
  inject: ['group'],
  methods: {
    handleData() {
      return this.statistic === 'value' ? this.group.tableData.value : this.group.tableData.percent
    }
  }
}
</script>

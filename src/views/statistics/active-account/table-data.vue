<template>
  <div>
    <el-table :data="group.tableData" show-summary sum-text="活躍帳戶數">
      <el-table-column property="date" label="日期" />
      <el-table-column property="amount" label="數量" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableData',
  inject: ['group'],
  props: {
    date: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleData() {
      return this.date === 'dau' ? this.group.tableData.dau : this.date === 'wau' ? this.group.tableData.wau : this.group.tableData.mau
    }
  }
}
</script>

<template>
  <div>
    <el-table :data="group.tableData">
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="amount" label="數量" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableData',
  inject: ['group']
}
</script>

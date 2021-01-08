<template>
  <div>
    <el-table :data="group.tableData">
      <el-table-column label="日期">
        <template slot-scope="scope">
          {{ scope.row[0] | moment('YYYY-MM-DD') }}
        </template>
      </el-table-column>
      <el-table-column label="數量">
        <template slot-scope="scope">
          {{ scope.row[1] }}
        </template>
      </el-table-column>
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

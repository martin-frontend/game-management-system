<template>
  <div>
    <el-table border :header-cell-style="headerStyle" :data="group.tableData">
      <el-table-column label="日期">
        <template slot-scope="scope">
          {{ scope.row[0] | moment('YYYY-MM-DD') }}
        </template>
      </el-table-column>
      <el-table-column :label="group.date">
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
  data() {
    return {
      headerStyle: {
        backgroundColor: '#f5f7fa'
      }
    }
  },
  methods: {
    handleData() {
      return this.date === 'dau' ? this.group.tableData.dau : this.date === 'wau' ? this.group.tableData.wau : this.group.tableData.mau
    }
  }
}
</script>

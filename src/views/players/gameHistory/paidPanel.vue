<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        prop="type"
        label="類別"
        width="180"
      />
      <el-table-column
        prop="system"
        label="系統"
        width="180"
      />
      <el-table-column
        prop="amount"
        label="數量"
      />
      <el-table-column
        prop="datetime"
        label="時間"
        sortable
      />
    </el-table>
    <div class="table-pagination">
      <el-pagination
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaidPanel',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-pagination{
  width: 100%;
  text-align: right;
}
</style>

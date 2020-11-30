<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        prop="category"
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
        prop="time"
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
  name: 'FreePanel',
  data() {
    return {
      tableData: [
        { 'category': '收入', 'system': '完成任務', 'amount': '1000', 'time': '2020/05/28 01:50' },
        { 'category': '收入', 'system': '攬客', 'amount': '1000', 'time': '2020/03/18 05:20' },
        { 'category': '收入', 'system': '販賣商品', 'amount': '50', 'time': '2020/07/20 06:40' },
        { 'category': '收入', 'system': '販賣商品2', 'amount': '50', 'time': '2020/07/20 06:40' },
        { 'category': '支出', 'system': '進貨', 'amount': '4000', 'time': '2020/01/01 11:35' }
      ]
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

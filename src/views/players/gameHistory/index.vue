<template>
  <div class="page-container">
    <searchPanel @onSearch="onSearch" />
    <div class="table-container">
      <el-tag style="margin-bottom:10px;">遊戲歷程</el-tag>
      <el-table
        :data="tableData"
        border
      >
        <el-table-column
          prop="logText"
          label="Log 記錄"
          width="250"
        />
        <el-table-column
          prop="createdAt"
          label="時間"
          sortable
        >
          <template slot-scope="scope">{{ TransformTime(scope.row.createdAt) }}</template>
        </el-table-column>
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
  </div>
</template>
<script>
import searchPanel from './searchPanel'
import moment from 'moment'

export default {
  name: 'Index',
  components: { searchPanel },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    onSearch(data) {
      this.tableData = [...data.content]
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    TransformTime(time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
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


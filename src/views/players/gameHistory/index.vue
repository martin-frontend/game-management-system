<template>
  <div class="page-container">
    <searchPanel :page-data="pageData" @onSearch="onSearch" />
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
          :page-sizes="[25, 50, 75, 10]"
          :page-size="25"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableTotal"
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
      tableData: [],
      tableTotal: 0,
      pageData: {
        pagesize: 25,
        page: 1
      }
    }
  },
  methods: {
    onSearch(dataobj) {
      console.log(dataobj)
      if (dataobj) {
        if (dataobj.data.length) {
          this.tableData = [...dataobj.data]
          this.tableTotal = dataobj.total
        } else {
          this.tableData = []
        }
      }
    },
    handleSizeChange(val) {
      this.pageData.pagesize = val
    },
    handleCurrentChange(val) {
      this.pageData.page = val
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


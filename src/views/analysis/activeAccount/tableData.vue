<template>
  <div>
    <el-table border :header-cell-style="headerStyle" :data="$parent.tableData">
      <el-table-column label="日期">
        <template slot-scope="scope">
          {{ scope.row[0] | moment('YYYY-MM-DD') }}
        </template>
      </el-table-column>
      <el-table-column :label="$parent.date">
        <template slot-scope="scope">
          {{ scope.row[1] }}
        </template>
      </el-table-column>
    </el-table>
    <div class="table-pagination">
      <el-pagination
        :current-page="1"
        :page-sizes="[25, 50, 75, 10]"
        :page-size="25"
        layout="total, sizes, prev, pager, next, jumper"
        :total="accountTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableData',
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
      },
      totalAmount: 0,
      createdTimes: 0,
      accountdata: [],
      accountTotal: 0,
      pageData: {
        pagesize: 25,
        page: 1
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageData.pagesize = val
    },
    handleCurrentChange(val) {
      this.pageData.page = val
    }
  }
}
</script>

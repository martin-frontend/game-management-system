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
    accountTotal: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      headerStyle: {
        // backgroundColor: '#f5f7fa'
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$parent.handleSizeChange(val)
    },
    handleCurrentChange(val) {
      this.$parent.handleCurrentChange(val)
    }
  }
}
</script>

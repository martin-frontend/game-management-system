<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        prop="operating"
        label="功能"
        width="300"
      >
        <template slot-scope="scope">
          <el-button type="primary" size="small">瀏覽</el-button>
          <el-button type="primary" size="small">編輯</el-button>
          <el-button v-if="scope.row.status==='未發送'" type="success" size="small">立即發送</el-button>
          <el-button type="danger" size="small">刪除</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="編號"
        width="100"
      />
      <el-table-column
        prop="title"
        label="標題"
        width="180"
      />
      <el-table-column
        prop="status"
        label="狀態"
        width="100"
      />
      <el-table-column
        label="發送時間"
        width="160"
      >
        <template slot-scope="scope">
          {{ scope.row.sendTime | moment }}
        </template>
      </el-table-column>
      <el-table-column
        prop="creator"
        label="建立者"
        width="100"
      />
      <el-table-column
        prop="content"
        label="內容"
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
  name: 'Item',
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
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

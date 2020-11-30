<template>
  <div>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        prop="operating"
        label="功能"
        width="180"
      >
        <el-button type="primary">瀏覽</el-button>
        <el-button type="primary">編輯</el-button>
        <el-button type="success">立即上架</el-button>
        <el-button type="warning">立即下架</el-button>
        <el-button type="danger">刪除</el-button>
      </el-table-column>
      <el-table-column
        prop="id"
        label="編號"
        width="180"
      />
      <el-table-column
        prop="title"
        label="標題"
        width="180"
      />
      <el-table-column
        prop="type"
        label="類型"
        width="180"
      />
      <el-table-column
        prop="status"
        label="狀態"
        width="180"
      />
      <el-table-column
        prop="launchTime"
        label="上架時間"
      />
      <el-table-column
        prop="removeTime"
        label="下架時間"
      />
      <el-table-column
        prop="creator"
        label="建立者"
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
  name: 'FreePanel',
  data() {
    return {
      tableData: [
        { 'id': '0001', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0002', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0003', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0004', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' }
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

<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>線上公告</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'announcement'">
            <Announcement :table-data="tableData" />
          </template>
          <template v-if="activeName === 'launched'">
            <p>上架中</p>
          </template>
          <template v-if="activeName === 'notLaunched'">
            <p>未上架</p>
          </template>
          <template v-if="activeName === 'removed'">
            <p>已下架</p>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import Announcement from './announcement'
import Dialog from './dialog'
export default {
  name: 'OnlineAnnouncement',
  components: { Dialog, Announcement },
  data() {
    return {
      tabMapOptions: [
        { label: '公告欄', key: 'announcement' },
        { label: '上架中', key: 'launched' },
        { label: '未上架', key: 'notLaunched' },
        { label: '已下架', key: 'removed' }
      ],
      activeName: 'announcement',
      initData: [
        { 'id': '0001', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0002', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0003', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0004', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' }
      ],
      tableData: []
    }
  },
  computed: {
  },
  created() {
    this.tableData = this.initData
  },
  methods: {
    add() {
      this.$refs.dialog.handleOpen()
    }
  }
}
</script>

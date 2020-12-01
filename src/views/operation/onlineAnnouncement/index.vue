<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>線上公告</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'all'">
            <Announcement :table-data="tableData" />
          </template>
          <template v-if="activeName === 'launched'">
            <Announcement :table-data="tableData" />
          </template>
          <template v-if="activeName === 'notLaunch'">
            <Announcement :table-data="tableData" />
          </template>
          <template v-if="activeName === 'removed'">
            <Announcement :table-data="tableData" />
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
        { label: '公告欄', key: 'all' },
        { label: '上架中', key: 'launched' },
        { label: '未上架', key: 'notLaunch' },
        { label: '已下架', key: 'removed' }
      ],
      activeName: 'all',
      initData: [
        { 'id': '0001', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0002', 'title': '開服公告', 'type': '重要', 'status': '已下架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0003', 'title': '開服公告', 'type': '重要', 'status': '未上架', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' },
        { 'id': '0004', 'title': '開服公告', 'type': '重要', 'status': '上架中', 'launchTime': '2020/12/1 00:00', 'removeTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '歡慶遊戲開服！加碼大放送...' }
      ],
      tableData: []
    }
  },
  computed: {
  },
  watch: {
    activeName: function(val) {
      if (val === 'launched') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '上架中'
        })
      } else if (val === 'notLaunch') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '未上架'
        })
      } else if (val === 'removed') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '已下架'
        })
      } else if (val === 'all') {
        this.tableData = this.initData
      }
    }
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

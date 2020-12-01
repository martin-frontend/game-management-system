<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>活動序號</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'all'">
            <Code :table-data="tableData" />
          </template>
          <template v-if="activeName === 'inProgress'">
            <Code :table-data="tableData" />
          </template>
          <template v-if="activeName === 'notStart'">
            <Code :table-data="tableData" />
          </template>
          <template v-if="activeName === 'finished'">
            <Code :table-data="tableData" />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import Code from './code'
import Dialog from './dialog'
export default {
  name: 'ActivityCode',
  components: { Dialog, Code },
  data() {
    return {
      tabMapOptions: [
        { label: '序號欄', key: 'all' },
        { label: '進行中', key: 'inProgress' },
        { label: '未進行', key: 'notStart' },
        { label: '已結束', key: 'finished' }
      ],
      activeName: 'all',
      initData: [
        { 'id': '0001', 'title': '事前登入序號', 'type': '活動獎品型', 'amount': 10000, 'status': '未進行',
          'startTime': '2020/12/1 00:00', 'endTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' },
        { 'id': '0002', 'title': '事前登入序號', 'type': '活動獎品型', 'amount': 100, 'status': '未進行',
          'startTime': '2020/12/1 00:00', 'endTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' },
        { 'id': '0003', 'title': '事前登入序號', 'type': '活動獎品型', 'amount': 400, 'status': '進行中',
          'startTime': '2020/12/1 00:00', 'endTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' },
        { 'id': '0004', 'title': '事前登入序號', 'type': '活動獎品型', 'amount': 500, 'status': '已結束',
          'startTime': '2020/12/1 00:00', 'endTime': '2020/12/31 23:59', 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' }
      ],
      tableData: []
    }
  },
  computed: {
  },
  watch: {
    activeName: function(val) {
      if (val === 'inProgress') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '進行中'
        })
      } else if (val === 'notStart') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '未進行'
        })
      } else if (val === 'finished') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '已結束'
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

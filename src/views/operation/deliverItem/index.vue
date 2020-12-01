<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>發送物品</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'all'">
            <Item :table-data="tableData" />
          </template>
          <template v-if="activeName === 'notSend'">
            <Item :table-data="tableData" />
          </template>
          <template v-if="activeName === 'sent'">
            <Item :table-data="tableData" />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import Item from './item'
import Dialog from './dialog'
export default {
  name: 'DeliverItem',
  components: { Dialog, Item },
  data() {
    return {
      tabMapOptions: [
        { label: '信件欄', key: 'all' },
        { label: '未發送', key: 'notSend' },
        { label: '已發送', key: 'sent' }
      ],
      activeName: 'all',
      initData: [
        { 'id': '0001', 'title': '事前登入禮', 'status': '未發送', 'sendTime': 1607000000000, 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' },
        { 'id': '0002', 'title': '事前登入禮', 'status': '未發送', 'sendTime': 1607000000000, 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' },
        { 'id': '0003', 'title': '事前登入禮', 'status': '已發送', 'sendTime': 1607000000000, 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' },
        { 'id': '0004', 'title': '事前登入禮', 'status': '未發送', 'sendTime': 1607000000000, 'creator': 'GM0001', 'content': '感謝各位玩家的是前登錄...' }
      ],
      tableData: []
    }
  },
  computed: {
  },
  watch: {
    activeName: function(val) {
      if (val === 'notSend') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '未發送'
        })
      } else if (val === 'sent') {
        this.tableData = this.initData.filter(function(item, index, array) {
          return item.status === '已發送'
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

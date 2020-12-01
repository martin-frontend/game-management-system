<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>帳號停權</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'all'">
            <List :table-data="tableData" />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import List from './list'
import Dialog from './dialog'
export default {
  name: 'AccountSuspension',
  components: { Dialog, List },
  data() {
    return {
      tabMapOptions: [
        { label: '停權名單', key: 'all' }
      ],
      activeName: 'all',
      initData: [
        { 'id': 'AB0001', 'playerId': '10012345', 'playerName': '王子麵', 'suspensionDays': '永久', 'restorationTime': '無' },
        { 'id': 'AB0002', 'playerId': '10056789', 'playerName': '大亨堡', 'suspensionDays': 7, 'restorationTime': '2020/12/31 23:59' }
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

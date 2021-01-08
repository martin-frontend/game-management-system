<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>帳號停權</el-tag>
      <el-button v-if="checkPermission(['修改帳號停權'])" icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template>
            <List v-if="activeName === 'banList'" v-loading="loading" :table-data="filterData(tableData)" @initdata="initdata" />
            <HistoryList v-if="activeName === 'history'" v-loading="loading" :table-data="tableData" @initdata="initdata" />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" @initdata="initdata" />
  </div>
</template>

<script>
import List from './list'
import HistoryList from './historylist'
import Dialog from './dialog'
import { getSuspension } from '@/api/suspension'
import checkPermission from '@/utils/permission'
export default {
  name: 'AccountSuspension',
  components: { Dialog, List, HistoryList },
  data() {
    return {
      loading: false,
      tabMapOptions: [
        { label: '停權名單', key: 'banList' },
        { label: '停權名單', key: 'history' }
      ],
      activeName: 'banList',
      tableData: []
    }
  },
  computed: {
  },
  mounted() {
    this.initdata()
  },
  created() {
    this.tableData = this.initData
  },
  methods: {
    checkPermission,
    add() {
      this.$refs.dialog.handleOpen()
    },
    initdata() {
      this.loading = true
      getSuspension()
        .then((response) => {
          const { data } = response
          if (data.success) {
            this.tableData = [...data.content]
          } else {
            this.tableData = []
            this.$message.warning(data.msg)
          }
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    filterData(arr) {
      if (arr) { return arr.filter(item => item.isbaned) }
    }
  }
}
</script>

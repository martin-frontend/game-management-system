<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>帳號停權</el-tag>
      <el-button v-if="checkPermission(['修改帳號停權'])" icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template>
            <List v-if="activeName === 'banList'" v-loading="loading" :table-data="filterData(tableData)" :page-total="pageTotal" @initdata="initdata" @pageChange="pageChange" />
            <HistoryList v-if="activeName === 'history'" v-loading="loading" :table-data="tableData" :page-total="pageTotal" @initdata="initdata" @pageChange="pageChange" />
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
      tableData: [],
      pageData: {
        pagesize: 25,
        page: 1
      },
      pageTotal: 0
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
      const formData = new FormData()
      formData.append('pageSize', this.pageData.pagesize)
      formData.append('page', this.pageData.page)
      getSuspension(formData)
        .then((response) => {
          const { data } = response
          if (data.success) {
            this.tableData = [...data.content.data]
            this.pageTotal = data.content.total
            console.log(this.pageTotal)
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
    pageChange(data) {
      this.pageData.pagesize = data.pagesize
      this.pageData.page = data.page
    },
    filterData(arr) {
      if (arr) { return arr.filter(item => item.isbaned) }
    }
  }
}
</script>

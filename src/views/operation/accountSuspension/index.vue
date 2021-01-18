<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>帳號停權</el-tag>
      <el-button v-if="checkPermission(['修改帳號停權'])" icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;" @tab-click="tabChange">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template>
            <List v-if="activeName === 'banList'" v-loading="loading" :table-data="tableData" :page-total="pageTotal" @initdata="initdata" @pageChange="pageChange" />
            <HistoryList v-if="activeName === 'history'" v-loading="loading" :table-data="tableData" :page-total="pageTotal" @initdata="initdata" @pageChange="pageChange" />
            <div class="table-pagination">
              <el-pagination
                :current-page="1"
                :page-sizes="[25, 50, 75, 100]"
                :page-size="25"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pageTotal"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
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
        { label: '歷史記錄', key: 'history' }
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
    handleSizeChange(val) {
      this.pageData.pagesize = val
      this.$emit('pageChange', this.pageData)
      this.initdata()
    },
    handleCurrentChange(val) {
      this.pageData.page = val
      this.$emit('pageChange', this.pageData)
      this.initdata()
    },
    add() {
      this.$refs.dialog.handleOpen()
    },
    tabChange() {
      this.initdata()
    },
    initdata() {
      this.loading = true
      const formData = {}
      formData.pageSize = this.pageData.pagesize
      formData.page = this.pageData.page
      if (this.activeName === 'banList') { formData.isbanned = '1' }
      getSuspension(formData)
        .then((response) => {
          const { data } = response
          if (data.success) {
            this.tableData = [...data.content.data]
            this.pageTotal = data.content.total
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
    }
  }
}
</script>

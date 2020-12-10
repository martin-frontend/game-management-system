<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>活動序號</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <Code :table-data="filterData(tableData)" @edit="edit" @initdata="initdata" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" @initdata="initdata" />
  </div>
</template>

<script>
import Code from './code'
import Dialog from './dialog'
import { getCode } from '@/api/code'
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
      tableData: []
    }
  },
  computed: {
  },
  created() {
    this.tableData = this.initData
  },
  mounted() {
    this.initdata()
  },
  methods: {
    add() {
      this.$refs.dialog.handleOpen('新增')
    },
    edit({ title, row }) {
      this.$refs.dialog.handleOpen(title, row)
    },
    filterData() {
      switch (this.activeName) {
        case 'inProgress':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '上架中'
          })
        case 'notStart':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '未上架'
          })
        case 'finished':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '已下架'
          })
        case 'all':
          return this.tableData
      }
    },
    initdata() {
      let state = ''
      switch (this.activeName) {
        case 'launched':
          state = '0'
          break
        case 'notLaunch':
          state = '1'
          break
        case 'removed':
          state = '2'
          break
      }
      const formData = new FormData()
      formData.append('state', state)
      getCode(formData)
        .then((response) => {
          this.tableData = [...response.data]
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

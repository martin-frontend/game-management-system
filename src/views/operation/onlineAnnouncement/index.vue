<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>線上公告</el-tag>
      <el-button
        v-if="checkPermission(['修改線上公告'])"
        icon="el-icon-plus"
        type="primary"
        circle
        style="float: right"
        @click="add"
      />
      <el-tabs v-model="activeName" style="margin-top: 10px">
        <el-tab-pane
          v-for="item in tabMapOptions"
          :key="item.key"
          :label="item.label"
          :name="item.key"
          @tab-click="changeTab"
        >
          <Announcement :table-data="filterData(tableData)" @edit="edit" @initdata="initdata" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" @initdata="initdata" />
  </div>
</template>

<script>
import Announcement from './announcement'
import Dialog from './dialog'
import { getBulletin } from '@/api/announcement'
import checkPermission from '@/utils/permission'

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
      tableData: []
    }
  },
  mounted() {
    this.initdata()
  },
  methods: {
    checkPermission,
    add() {
      this.$refs.dialog.handleOpen('新增')
    },
    edit({ title, row }) {
      this.$refs.dialog.handleOpen(title, row)
    },
    filterData() {
      switch (this.activeName) {
        case 'launched':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '上架中'
          })
        case 'notLaunch':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '未上架'
          })
        case 'removed':
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
      getBulletin(formData)
        .then((response) => {
          this.tableData = [...response.data]
        })
        .catch((error) => {
          console.log(error)
        })
    },
    changeTab(tab, event) {
      // this.initData()
      alert()
    }
  }
}
</script>

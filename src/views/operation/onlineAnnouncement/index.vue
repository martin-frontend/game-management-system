<template>
  <div ref="pageContainer" class="page-container">
    <div class="table-container">
      <el-tag>線上公告</el-tag>
      <el-button
        v-if="checkPermission(['修改線上公告'])"
        icon="el-icon-plus"
        type="primary"
        circle
        style="float: right;margin-left:10px"
        @click="add"
      />
      <el-button
        v-loading="listLoading"
        style="float: right"
        type="primary"
        @click="handleCategory"
      >
        編輯分類
      </el-button>
      <el-tabs v-model="activeName" style="margin-top: 10px">
        <el-tab-pane
          v-for="item in tabMapOptions"
          :key="item.key"
          :label="item.label"
          :name="item.key"
          @tab-click="changeTab"
        >
          <Announcement v-loading="loading" :table-data="filterData()" @edit="edit" @initdata="initdata" />
        </el-tab-pane>
      </el-tabs>
      <div v-if="activeName==='all'" class="table-pagination">
        <el-pagination
          :current-page="1"
          :page-sizes="[25, 50, 75, 100]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <AddAcounts ref="addAcounts" :form-data="formData" @setInit="setInit" />
    <Dialog ref="dialog" @initdata="initdata" />
  </div>
</template>

<script>
import Announcement from './announcement'
import Dialog from './dialog'
import { getAnnounce, getannouncecategory } from '@/api/announcement'
import checkPermission from '@/utils/permission'
import AddAcounts from './addAcounts'
export default {
  name: 'OnlineAnnouncement',
  components: { Dialog, Announcement, AddAcounts },
  data() {
    return {
      loading: false,
      listLoading: false,
      tabMapOptions: [
        { label: '公告欄', key: 'all' },
        { label: '上架中', key: 'launched' },
        { label: '未上架', key: 'notLaunch' },
        { label: '已下架', key: 'removed' }
      ],
      activeName: 'all',
      tableData: [],
      formData: {
        accountList: [
          {
            label: '',
            key: Date.now()
          }
        ]
      },
      pageData: {
        pagesize: 25,
        page: 1
      },
      pageTotal: 0
    }
  },
  mounted() {
    this.initdata()
    this.categoryList()
  },
  methods: {
    checkPermission,
    add() {
      this.$refs.dialog.handleOpen('新增')
    },
    edit({ title, row }) {
      this.$refs.dialog.handleOpen(title, row)
    },
    handleSizeChange(val) {
      this.pageData.pagesize = val
      this.initdata()
    },
    handleCurrentChange(val) {
      this.pageData.page = val
      this.initdata()
    },
    filterData() {
      switch (this.activeName) {
        case 'notLaunch':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '1'
          })
        case 'launched':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '2'
          })
        case 'removed':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '3'
          })
        case 'all':
          return this.tableData
      }
    },
    categoryList() {
      this.listLoading = true
      getannouncecategory()
        .then((response) => {
          this.listLoading = false
          const { data } = response
          if (data.success) {
            if (data.content.length > 0) {
              const category = data.content.split(',')
              this.formData.accountList = category.map((item, index) => {
                return {
                  label: item,
                  key: Date.now() + index
                }
              })
            }
          } else {
            this.$message.warning(data.msg)
          }
          this.$nextTick(() => {
            this.$refs.pageContainer.scrollTo({ top: 0, behavior: 'smooth' })
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    initdata() {
      this.loading = true
      const formData = {}
      formData.pageSize = this.pageData.pagesize
      formData.page = this.pageData.page
      getAnnounce(formData)
        .then((response) => {
          const { data } = response
          console.log(data)
          if (data.success) {
            this.tableData = [...data.content.data]
            this.tableData = this.tableData.map((item) => ({
              ...item,
              id: item.id
            }))
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
    changeTab(tab, event) {
      // this.initData()
      alert()
    },
    handleCategory() {
      this.$refs.addAcounts.handleOpen()
    },
    setInit(formData) {
      this.formData = formData
    }
  }
}
</script>

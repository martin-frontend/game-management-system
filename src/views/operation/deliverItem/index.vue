<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>發送物品</el-tag>
      <el-button v-if="checkPermission(['修改發送物品'])" icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <Item :table-data="filterData(tableData)" @edit="edit" @initdata="initdata" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" @initdata="initdata" />
  </div>
</template>

<script>
import Item from './item'
import Dialog from './dialog'
import { getItem } from '@/api/item'
import checkPermission from '@/utils/permission'
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
      tableData: []
    }
  },
  computed: {
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
        case 'notSend':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '未發送'
          })
        case 'sent':
          return this.tableData.filter(function(item, index, array) {
            return item.status === '已發送'
          })
        case 'all':
          return this.tableData
      }
    },
    initdata() {
      let state = ''
      switch (this.activeName) {
        case 'notSend':
          state = '0'
          break
        case 'sent':
          state = '1'
          break
      }
      const formData = new FormData()
      formData.append('state', state)
      getItem(formData)
        .then((response) => {
          const { data } = response
          if (data.success) {
            this.tableData = [...data.content]
          } else {
            this.tableData = []
            this.$message.warning(data.msg)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

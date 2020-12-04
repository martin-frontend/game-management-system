<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>發送物品</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <Item :table-data="filterData(tableData)" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import Item from './item'
import Dialog from './dialog'
import { getItem } from '@/api/item'
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
    add() {
      this.$refs.dialog.handleOpen()
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
          this.tableData = [...response.data]
          console.log(this.tableData)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

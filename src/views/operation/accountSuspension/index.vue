<template>
  <div class="page-container">
    <div class="table-container">
      <el-tag>帳號停權</el-tag>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
      <el-tabs v-model="activeName" style="margin-top:10px;">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <template v-if="activeName === 'all'">
            <List :table-data="tableData" @initdata="initdata" />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Dialog ref="dialog" @initdata="initdata" />
  </div>
</template>

<script>
import List from './list'
import Dialog from './dialog'
import { getSuspension } from '@/api/suspension'
export default {
  name: 'AccountSuspension',
  components: { Dialog, List },
  data() {
    return {
      tabMapOptions: [
        { label: '停權名單', key: 'all' }
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
  created() {
    this.tableData = this.initData
  },
  methods: {
    add() {
      this.$refs.dialog.handleOpen()
    },
    initdata() {
      getSuspension()
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

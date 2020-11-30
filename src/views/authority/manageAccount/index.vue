<template>
  <div class="page-container">
    <div class="table-container">
      <p>後台帳號</p>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="add" />
    </div>
    <el-table
      style="width: 100%"
      :data="userdata"
      border
    >
      <el-table-column
        label="帳號ID"
        width="180"
      >
        <template slot-scope="scope">{{ scope.row.account }}</template>
      </el-table-column>
      <el-table-column
        label="狀態"
        width="180"
      >
        <template slot-scope="scope">{{ statusName(scope.row.status) }}</template>
      </el-table-column>
      <el-table-column
        label="權限"
        width="180"
      >
        <template slot-scope="scope">{{ roleName(scope.row.role) }}</template>
      </el-table-column>
      <el-table-column
        width="180"
        label="建立時間"
      >
        <template slot-scope="scope">{{ scope.row.create_at }}</template>
      </el-table-column>
      <el-table-column
        label="功能"
      />
    </el-table>
    <Dialog ref="dialog" />
  </div>
</template>

<script>
import Dialog from './dialog'
import { getUser } from '@/api/authority'

export default {
  name: 'ManageAccount',
  components: { Dialog },
  data() {
    return {
      tabMapOptions: [
        { label: '後台帳號', key: 'a' }
      ],
      activeName: 'a',
      userdata: []
    }
  },
  computed: {
  },
  mounted() {
    this.initData()
  },
  methods: {
    add() {
      this.$refs.dialog.handleOpen()
    },
    roleName(num) {
      switch (num) {
        case '1':
          return '超級管理員'
        case '2':
          return '開發者帳號'
        case '3':
          return '客服帳號'
      }
    },
    statusName(num) {
      switch (num) {
        case '0':
          return '停用'
        case '1':
          return '啟用'
      }
    },
    initData() {
      getUser().then(response => {
        this.userdata = [...response.data]
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss">
  .table-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
</style>

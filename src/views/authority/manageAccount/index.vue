<template>
  <div class="page-container">
    <div class="table-container">
      <p>後台帳號</p>
      <el-button
        icon="el-icon-plus"
        type="primary"
        circle
        style="float: right"
        @click="createUser"
      />
    </div>
    <el-table style="width: 100%" :data="tabledata" border>
      <el-table-column label="帳號ID" width="180">
        <template slot-scope="scope">{{ scope.row.account }}</template>
      </el-table-column>
      <el-table-column label="狀態" width="180">
        <template slot-scope="scope">{{
          statusName(scope.row.status)
        }}</template>
      </el-table-column>
      <el-table-column label="權限" width="180">
        <template slot-scope="scope">{{ scope.row.role }}</template>
      </el-table-column>
      <el-table-column width="180" label="建立時間">
        <template slot-scope="scope">{{ scope.row.create_at }}</template>
      </el-table-column>
      <el-table-column label="功能">
        <template slot-scope="scope">
          <el-button @click="deleteUser(scope.row.id)">刪除</el-button>
          <el-button @click="modifyUser(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog ref="dialog" @initData="initData" />
  </div>
</template>

<script>
import Dialog from './dialog'
import { getUser, deleteUser } from '@/api/authority'

export default {
  name: 'ManageAccount',
  components: { Dialog },
  data() {
    return {
      tabledata: []
    }
  },
  computed: {},
  mounted() {
    this.initData()
  },
  methods: {
    createUser() {
      this.$refs.dialog.handleOpen('新增')
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
      getUser()
        .then((response) => {
          this.tabledata = [...response.data]
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteUser(id) {
      const formData = new FormData()
      formData.append('id', id)
      deleteUser(formData)
        .then((resopnse) => {
          this.initData()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    modifyUser(data) {
      this.$refs.dialog.handleOpen('修改', data)
    }
  }
}
</script>
<style lang="scss" scoped>
.table-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>

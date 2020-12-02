<template>
  <div class="page-container">
    <div class="table-container">
      <p>權限</p>
      <el-button icon="el-icon-plus" type="primary" circle style="float: right" @click="createRole" />
    </div>
    <el-table
      style="width: 100%"
      :data="tabledata"
      border
    >
      <el-table-column
        label="權限名稱"
        width="180"
      >
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column
        label="權限"
      >
        <template slot-scope="scope">{{ scope.row.roles }}</template>
      </el-table-column>

      <el-table-column
        label="功能"
        width="180"
      >
        <template slot-scope="scope">
          <el-button @click="deleteRole(scope.row.id)">刪除</el-button>
          <el-button @click="modifyRole(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog ref="dialog" @initData="initData" />
  </div>
</template>

<script>
import Dialog from './dialog'
import { getRole, deleteRole } from '@/api/authority'

export default {
  name: 'AuthoritySetting',
  components: { Dialog },
  data() {
    return {
      tabledata: []
    }
  },
  mounted() {
    this.initData()
  },
  created() {

  },
  methods: {
    initData() {
      getRole().then(response => {
        this.tabledata = [...response.data]
      }).catch(error => {
        console.log(error)
      })
    },
    createRole() {
      this.$refs.dialog.handleOpen('新增')
    },
    deleteRole(id) {
      const formData = new FormData()
      formData.append('id', id)
      deleteRole(formData).then(resopnse => {
        this.initData()
      }).catch(err => {
        console.log(err)
      })
    },
    modifyRole(data) {
      this.$refs.dialog.handleOpen('修改', data)
    }

  }
}
</script>
<style lang="scss" scoped>
  .table-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
</style>

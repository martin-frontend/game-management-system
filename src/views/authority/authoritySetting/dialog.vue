<template>
  <div>
    <el-dialog :title="title+'權限'" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formData">
        <el-form-item label="權限名稱" :label-width="formLabelWidth">
          <el-input v-model="formData.name" autocomplete="off" placeholder="權限名稱" class="form-width" />
        </el-form-item>
        <el-form-item label="權限" :label-width="formLabelWidth">
          <el-checkbox-group v-model="formData.roles">
            <el-checkbox v-for="(item,index) in roleList" :key="index" :label="item" />
          </el-checkbox-group>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="title==='新增'" type="primary" @click="createRole">建 立</el-button>
        <el-button v-else type="primary" @click="updateRole">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createRole, updateRole } from '@/api/authority'
export default {
  data() {
    return {
      formData: {
        roles: []
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '',
      roleList: ['查詢玩家帳號資訊', '查詢玩家儲值紀錄', '查詢玩家商店資訊',
        '修改玩家帳號資訊', '修改玩家儲值紀錄', '修改玩家商店資訊']
    }
  },
  methods: {
    handleClose() {
      this.loading = false
      this.dialogFormVisible = false
    },
    handleOpen(title, data) {
      this.dialogFormVisible = true
      this.title = title
      if (title === '修改') {
        this.formData = Object.assign({}, data)
        const str = this.formData.roles
        this.formData.roles = str.split(',')
      }
    },
    createRole() {
      const formData = new FormData()
      formData.append('name', this.formData.name)
      formData.append('roles', this.formData.roles.join())
      createRole(formData).then(resopnse => {
        this.$emit('initData')
        this.dialogFormVisible = false
      }).catch(err => {
        console.log(err)
      })
    },
    updateRole() {
      const formData = new FormData()
      formData.append('name', this.formData.name)
      formData.append('roles', this.formData.roles.join())
      formData.append('id', this.formData.id)
      updateRole(formData).then(resopnse => {
        this.$emit('initData')
        this.dialogFormVisible = false
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.form-width{
  width: 220px;
}
</style>

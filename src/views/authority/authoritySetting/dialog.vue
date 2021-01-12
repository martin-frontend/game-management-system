<template>
  <div>
    <el-dialog
      :title="title + '權限'"
      :before-close="handleClose"
      :visible.sync="dialogFormVisible"
      width="60%"
    >
      <el-form :model="formData">
        <el-form-item label="權限名稱" :label-width="formLabelWidth">
          <el-input
            v-model="formData.name"
            autocomplete="off"
            placeholder="權限名稱"
            class="form-width"
          />
        </el-form-item>
        <el-form-item label="權限" :label-width="formLabelWidth">
          <el-tabs v-model="activeName">
            <el-tab-pane v-for="item in roleList" :key="item.name" :label="item.name" :name="item.name">
              <el-checkbox-group v-model="formData.roles">
                <el-checkbox
                  v-for="subitem in item.role"
                  :key="subitem"
                  :label="subitem"
                />
              </el-checkbox-group>
            </el-tab-pane>
          </el-tabs>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button
          v-if="title === '新增'"
          type="primary"
          @click="createRole"
        >建 立</el-button>
        <el-button v-else type="primary" @click="updateRole">更 新 </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createRole, updateRole } from '@/api/authority'
import { getRoles } from '@/utils/roles'
export default {
  data() {
    return {
      formData: {
        roles: []
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '',
      roleList: getRoles(),
      activeName: '玩家資料'
    }
  },
  methods: {
    resetFormData() {
      this.formData = {
        id: '',
        name: '',
        roleLevel: '',
        roles: []
      }
    },
    handleClose() {
      this.loading = false
      this.resetFormData()
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
      createRole(formData)
        .then((response) => {
          if (response.data.success) {
            this.$emit('initData')
            this.$message.success(response.data.msg)
          } else {
            this.$message.warning(response.data.msg)
          }
          this.dialogFormVisible = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateRole() {
      const formData = new FormData()
      formData.append('name', this.formData.name)
      formData.append('roles', this.formData.roles.join())
      formData.append('id', this.formData.id)
      updateRole(formData)
        .then((response) => {
          if (response.data.success) {
            this.$emit('initData')
            this.$message.success(response.data.msg)
          } else {
            this.$message.warning(response.data.msg)
          }
          this.dialogFormVisible = false
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.form-width {
  width: 220px;
}
</style>

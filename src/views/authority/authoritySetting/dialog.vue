<template>
  <div>
    <el-dialog
      :title="title + '權限'"
      :before-close="handleClose"
      :v-if="dialogFormVisible"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      width="60%"
    >
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item label="權限名稱" :prop="'name'" :label-width="formLabelWidth">
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
import { getRoles, getDefaultRoles } from '@/utils/roles'
export default {
  data() {
    return {
      formData: {
        roles: getDefaultRoles()
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '',
      roleList: getRoles(),
      activeName: '玩家資料',
      rules: {
        name: [
          { required: true, message: '請輸入權限', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    resetFormData() {
      this.formData = {
        id: '',
        name: '',
        roleLevel: '',
        roles: getDefaultRoles()
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
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.formData.roles.length) {
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
          } else {
            this.$message.warning('權限不可全為空')
          }
        }
      })
    },
    updateRole() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.formData.roles.length) {
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
          } else {
            this.$message.warning('權限不可全為空')
          }
        }
      })
    },
    defaultPage(subitem) {
      const defaultPage = getDefaultRoles()
      if (defaultPage.indexOf(subitem) < 0) {
        return false
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.form-width {
  width: 220px;
}
</style>

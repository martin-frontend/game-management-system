<template>
  <div>
    <el-dialog
      :title="title + '帳號'"
      :before-close="handleClose"
      :v-if="dialogFormVisible"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      width="30%"
    >
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item label="帳號" :prop="'account'" :label-width="formLabelWidth">
          <el-input
            v-model="formData.account"
            autocomplete="off"
            placeholder="請輸入帳號"
            class="form-width"
          />
        </el-form-item>
        <el-form-item label="密碼" :prop="'password'" :label-width="formLabelWidth">
          <el-input
            v-model="formData.password"
            autocomplete="off"
            placeholder="請輸入密碼"
            class="form-width"
            show-password
          />
        </el-form-item>
        <el-form-item v-if="title !== '修改'" :prop="'c_password'" label="確認密碼" :label-width="formLabelWidth">
          <el-input
            v-model="formData.c_password"
            autocomplete="off"
            placeholder="請輸入密碼"
            class="form-width"
            show-password
          />
        </el-form-item>
        <el-form-item label="權限" :prop="'roleId'" :label-width="formLabelWidth">
          <el-select
            v-model="formData.roleId"
            placeholder="請選擇權限"
            class="form-width"
          >
            <el-option
              v-for="item in roleSelectList.filter(a=>a.roleLevel)"
              :key="item.id"
              :value="item.id"
              :label="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="狀態" :label-width="formLabelWidth">
          <el-radio v-model="formData.status" label="1">啟用</el-radio>
          <el-radio v-model="formData.status" label="0">停用</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button
          v-if="title === '新增'"
          type="primary"
          @click="createUser"
        >建 立</el-button>
        <el-button v-else type="primary" @click="updateUser">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createUser, updateUser, getRole } from '@/api/authority'
export default {
  data() {
    return {
      formData: { status: '1' },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '',
      roleSelectList: [],
      rules: {
        account: [
          { required: true, message: '請輸入帳號', trigger: 'change' }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'change' }
        ],
        c_password: [
          { required: true, message: '請輸入確認密碼', trigger: 'change' }
        ],
        roleId: [
          { required: true, message: '請輸入權限', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
    this.initRoleSelect()
  },
  methods: {
    resetFormData() {
      this.formData = {}
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
      }
    },
    initRoleSelect() {
      getRole()
        .then((response) => {
          if (response.data.success) {
            this.roleSelectList = [...response.data.content.data]
          } else {
            this.roleSelectList = []
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    createUser() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const formData = new FormData()
          formData.append('account', this.formData.account)
          formData.append('password', this.formData.password)
          formData.append('roleId', this.formData.roleId)
          formData.append('status', this.formData.status)
          createUser(formData)
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
      })
    },
    updateUser() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const formData = new FormData()
          formData.append('account', this.formData.account)
          formData.append('password', this.formData.password)
          formData.append('roleId', this.formData.roleId)
          formData.append('status', this.formData.status)
          formData.append('id', this.formData.id)
          updateUser(formData)
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

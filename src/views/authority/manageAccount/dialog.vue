<template>
  <div>
    <el-dialog
      :title="title + '帳號'"
      :visible.sync="dialogFormVisible"
      width="30%"
    >
      <el-form :model="formData">
        <el-form-item label="帳號" :label-width="formLabelWidth">
          <el-input
            v-model="formData.account"
            autocomplete="off"
            placeholder="請輸入帳號"
            class="form-width"
          />
        </el-form-item>
        <el-form-item label="密碼" :label-width="formLabelWidth">
          <el-input
            v-model="formData.password"
            autocomplete="off"
            placeholder="請輸入密碼"
            class="form-width"
            show-password
          />
        </el-form-item>
        <el-form-item v-if="title !== '修改'" label="確認密碼" :label-width="formLabelWidth">
          <el-input
            v-model="formData.c_password"
            autocomplete="off"
            placeholder="請輸入密碼"
            class="form-width"
            show-password
          />
        </el-form-item>
        <el-form-item label="權限" :label-width="formLabelWidth">
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
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
      formData: {},
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '',
      roleSelectList: []
    }
  },
  mounted() {
    this.initRoleSelect()
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
      }
    },
    initRoleSelect() {
      getRole()
        .then((response) => {
          if (response.data.success) {
            this.roleSelectList = [...response.data.content]
          } else {
            this.roleSelectList = []
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    createUser() {
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
    },
    updateUser() {
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
  }
}
</script>
<style lang="scss" scoped>
.form-width {
  width: 220px;
}
</style>

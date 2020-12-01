<template>
  <div>
    <el-dialog title="新增帳號" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="formData">
        <el-form-item label="帳號ID" :label-width="formLabelWidth">
          <el-input v-model="formData.account" autocomplete="off" placeholder="請輸入ID" class="form-width" />
        </el-form-item>
        <el-form-item label="密碼" :label-width="formLabelWidth">
          <el-input v-model="formData.password" autocomplete="off" placeholder="請輸入密碼" class="form-width" />
        </el-form-item>
        <el-form-item label="確認密碼" :label-width="formLabelWidth">
          <el-input v-model="formData.c_password" autocomplete="off" placeholder="請輸入密碼" class="form-width" />
        </el-form-item>
        <el-form-item label="權限" :label-width="formLabelWidth">
          <el-select v-model="formData.role" placeholder="請選擇權限" class="form-width">
            <el-option label="開發者權限" value="2" />
            <el-option label="客服權限" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="狀態" :label-width="formLabelWidth">
          <el-radio v-model="formData.status" label="1">啟用</el-radio>
          <el-radio v-model="formData.status" label="2">停用</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createUser">建 立</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createUser } from '@/api/authority'
export default {
  data() {
    return {
      formData: {},
      dialogFormVisible: false,
      formLabelWidth: '80px'
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title
      //   this.form = {}
      if (title === '修改') {
        this.form = Object.assign({}, row)
      }
    },
    createUser() {
      const formData = new FormData()
      formData.append('account', this.formData.account)
      formData.append('password', this.formData.password)
      formData.append('role', this.formData.role)
      formData.append('status', this.formData.status)
      createUser(formData).then(resopnse => {
        alert(resopnse.data)
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

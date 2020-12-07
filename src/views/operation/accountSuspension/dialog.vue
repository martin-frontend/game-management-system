<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item
          v-for="(account, index) in formData.accounts"
          :key="account.key"
          :label="'帳號ID'"
          :prop="'accounts.' + index + '.value'"
          :label-width="formLabelWidth"
        >
          <el-input v-model="account.id" class="form-width form-margin" />
          <el-button v-if="index == 0" @click="addAccount">新增帳號ID</el-button>
          <i v-if="index == 0" class="el-icon-upload2 icon"></i>
          <el-button v-if="index != 0" @click.prevent="removeAccount(account)">删除</el-button>
        </el-form-item>
        <el-form-item label="時間" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.recoverytime"
            type="datetime"
            placeholder="請選擇停權結束日期時間"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="form-margin"
          />
          <el-checkbox v-model="formData.checked">永久停權</el-checkbox>
        </el-form-item>
        <el-form-item label="事由" :label-width="formLabelWidth">
          <el-input
            v-model="formData.reason"
            type="textarea"
            :rows="6"
            placeholder="請輸入停權事由"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="createSuspension">建 立</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createSuspension } from '@/api/suspension'
export default {
  data() {
    return {
      formData: {
        accounts: [{
          id: ''
        }],
        checked: false,
        radio: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '停權'
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.formData = {
        accounts: [{
          id: ''
        }]
      }
      // this.$refs['formData'].resetFields()
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title
      //   this.form = {}
    },
    createSuspension() {
      const formData = new FormData()
      formData.append('suspendid', this.formData.accounts[0].id)
      formData.append('recoverytime', this.formData.recoverytime)
      formData.append('suspendstate', 1)
      formData.append('reason', this.formData.reason)
      createSuspension(formData)
        .then((resopnse) => {
          console.log(resopnse)
          this.$emit('initdata')
          this.dialogFormVisible = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    removeAccount(item) {
      var index = this.formData.accounts.indexOf(item)
      if (index !== -1) {
        this.formData.accounts.splice(index, 1)
      }
    },
    addAccount() {
      this.formData.accounts.push({
        id: '',
        key: Date.now()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin{
  margin-right: 10px;
  margin-bottom: 10px;
}
.form-width{
  width: 220px;
}
.icon{
  margin-left: 10px;
  font-size: 20px;
  vertical-align: middle;
}
</style>

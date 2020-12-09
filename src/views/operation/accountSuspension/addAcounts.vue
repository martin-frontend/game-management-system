<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :close-on-click-modal="false" :visible="dialogFormVisible" width="50%">
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="addAccounts">新 增</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    formData: {
      type: Object,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增多筆帳號ID'
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      // this.$refs['formData'].resetFields()
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      // this.title = title
      //   this.form = {}
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
    },
    addAccounts() {
      this.formData.accounts = this.formData.accounts.filter(function(item, index, array) {
        return item.id !== ''
      })
      if (this.formData.accounts.length === 0) {
        this.formData.accounts = [{
          id: ''
        }]
      }
      this.dialogFormVisible = false
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
  cursor: pointer;
}
</style>

<template>
  <div>
    <el-dialog title="停權" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="form">
        <el-form-item
          v-for="(account, index) in form.accounts"
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
          <el-input v-model="form.name" autocomplete="off" placeholder="請輸入天數" class="form-width form-margin" />
          <el-checkbox v-model="form.checked">永久停權</el-checkbox>
        </el-form-item>
        <el-form-item label="事由" :label-width="formLabelWidth">
          <el-input
            v-model="form.textarea"
            type="textarea"
            :rows="6"
            placeholder="請輸入停權事由"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">執 行</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        accounts: [{
          id: ''
        }],
        checked: false,
        radio: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '80px'
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.$refs['formData'].resetFields()
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title
      //   this.form = {}
      if (title === '修改') {
        this.form = Object.assign({}, row)
      }
    },
    removeAccount(item) {
      var index = this.form.accounts.indexOf(item)
      if (index !== -1) {
        this.form.accounts.splice(index, 1)
      }
    },
    addAccount() {
      this.form.accounts.push({
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

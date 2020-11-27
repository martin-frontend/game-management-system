<template>
  <div>
    <el-dialog title="新增信件" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="form">
        <el-form-item label="標題" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="請輸入標題" />
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.startDate"
            type="date"
            placeholder="請選擇發送日期"
            class="form-margin"
          />
          <el-time-select
            v-model="form.startTime"
            :picker-options="{
              start: '00:00',
              step: '00:15',
              end: '24:00'
            }"
            placeholder="請選擇發送時間"
            class="form-margin"
          />
          <el-checkbox v-model="form.checked">立即發送</el-checkbox>
        </el-form-item>
        <el-form-item label="對象" :label-width="formLabelWidth">
          <el-radio v-model="form.radio" label="1">全部玩家</el-radio>
          <el-radio v-model="form.radio" label="2">指定玩家</el-radio>
          <i class="el-icon-upload2"></i>
        </el-form-item>
        <el-form-item label="道具" :label-width="formLabelWidth" />
        <el-form-item label="內容" :label-width="formLabelWidth">
          <el-input
            v-model="form.textarea"
            type="textarea"
            :rows="6"
            placeholder="請輸入信件內容"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">建 立</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin{
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

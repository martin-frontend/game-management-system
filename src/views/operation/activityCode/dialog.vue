<template>
  <div>
    <el-dialog title="新增序號" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="form">
        <el-form-item label="標題" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="請輸入標題" />
        </el-form-item>
        <el-form-item label="類型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="請選擇類型" class="form-margin form-width">
            <el-option label="活動獎品型（單次單人使用）" value="single" />
            <el-option label="社群媒體型（單次多人使用）" value="multi" />
          </el-select>
          <el-input v-model="form.snNumber" class="form-width" autocomplete="off" placeholder="請輸入序號數量" />
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <div>
            <el-date-picker
              v-model="form.startDate"
              type="date"
              placeholder="請選擇開始日期"
              class="form-margin"
            />
            <el-time-select
              v-model="form.startTime"
              :picker-options="{
                start: '00:00',
                step: '00:15',
                end: '24:00'
              }"
              placeholder="請選擇開始時間"
              class="form-margin"
            />
          </div>
          <div>
            <el-date-picker
              v-model="form.endDate"
              type="date"
              placeholder="請選擇結束日期"
              class="form-margin"
            />
            <el-time-select
              v-model="form.endTime"
              :picker-options="{
                start: '00:00',
                step: '00:15',
                end: '24:00'
              }"
              placeholder="請選擇結束時間"
              class="form-margin"
            />
          </div>
        </el-form-item>
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
        checked: false
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
.form-width{
  width: 250px;
}
</style>

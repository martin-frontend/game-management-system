<template>
  <div>
    <el-dialog title="新增公告" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="form">
        <el-form-item label="標題" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="請輸入標題" />
        </el-form-item>
        <el-form-item label="分類" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="請選擇分類">
            <el-option label="重要" value="" />
            <el-option label="活動" value="" />
            <el-option label="維護" value="" />
            <el-option label="補償" value="" />
            <el-option label="其他" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <div>
            <el-date-picker
              v-model="form.startDate"
              type="date"
              placeholder="請選擇上架日期"
              class="form-margin"
            />
            <el-time-select
              v-model="form.startTime"
              :picker-options="{
                start: '00:00',
                step: '00:15',
                end: '24:00'
              }"
              placeholder="請選擇上架時間"
              class="form-margin"
            />
            <el-checkbox v-model="form.checked">立即上架</el-checkbox>
          </div>
          <div>
            <el-date-picker
              v-model="form.endDate"
              type="date"
              placeholder="請選擇下架日期"
              class="form-margin"
            />
            <el-time-select
              v-model="form.endTime"
              :picker-options="{
                start: '00:00',
                step: '00:15',
                end: '24:00'
              }"
              placeholder="請選擇下架時間"
              class="form-margin"
            />
          </div>
        </el-form-item>
        <el-form-item label="內容" :label-width="formLabelWidth">
          <tinymce v-model="form.content" :height="200" />
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
import Tinymce from '@/components/Tinymce'
export default {
  components: { Tinymce },
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
      this.$refs['form'].resetFields()
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

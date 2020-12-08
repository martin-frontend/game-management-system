<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item label="標題" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off" placeholder="請輸入標題" />
        </el-form-item>
        <el-form-item label="類型" :label-width="formLabelWidth">
          <el-select v-model="formData.type" placeholder="請選擇類型" class="form-margin form-width">
            <el-option label="活動獎品型（單次單人使用）" value="活動獎品型" />
            <el-option label="社群媒體型（單次多人使用）" value="社群媒體型" />
          </el-select>
          <el-input v-model="formData.amount" class="form-width" autocomplete="off" placeholder="請輸入序號數量" />
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <div>
            <el-date-picker
              v-model="formData.startdate"
              type="datetime"
              placeholder="請選擇開始日期時間"
              value-format="yyyy-MM-dd HH:mm:ss"
              class="form-margin"
            />
          </div>
          <div>
            <el-date-picker
              v-model="formData.enddate"
              type="datetime"
              placeholder="請選擇下架日期時間"
              value-format="yyyy-MM-dd HH:mm:ss"
              class="form-margin"
            />
          </div>
        </el-form-item>
        <el-form-item label="內容" :label-width="formLabelWidth">
          <el-input
            v-model="formData.content"
            type="textarea"
            :rows="6"
            placeholder="請輸入信件內容"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="createCode">建 立</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createCode } from '@/api/code'
export default {
  data() {
    return {
      formData: {
        checked: false
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增序號'
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.formData = {}
      // this.$refs['formData'].resetFields()
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title + '序號'
      //   this.form = {}
      if (title === '修改') {
        this.form = Object.assign({}, row)
      }
    },
    createCode() {
      const formData = new FormData()
      formData.append('title', this.formData.title)
      formData.append('type', this.formData.type)
      formData.append('amount', this.formData.amount)
      formData.append('startdate', this.formData.startdate)
      formData.append('enddate', this.formData.enddate)
      formData.append('content', this.formData.content)
      createCode(formData)
        .then((resopnse) => {
          this.$emit('initdata')
          this.handleClose()
        })
        .catch((err) => {
          console.log(err)
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
  width: 250px;
}
</style>

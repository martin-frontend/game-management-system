<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item label="標題" :label-width="formLabelWidth">
          <el-input
            v-model="formData.title"
            autocomplete="off"
            placeholder="請輸入標題"
          />
        </el-form-item>
        <el-form-item label="分類" :label-width="formLabelWidth">
          <el-select v-model="formData.category" placeholder="請選擇分類">
            <el-option label="重要" value="重要" />
            <el-option label="活動" value="活動" />
            <el-option label="維護" value="維護" />
            <el-option label="補償" value="補償" />
            <el-option label="其他" value="其他" />
          </el-select>
          <svg-icon icon-class="form" class="icon" />
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <div>
            <el-date-picker
              v-model="formData.onsaledate"
              type="datetime"
              placeholder="請選擇上架日期時間"
              value-format="yyyy-MM-dd HH:mm:ss"
              class="form-margin"
              @change="start"
            />
            <el-checkbox v-model="formData.checked">立即上架</el-checkbox>
          </div>
          <div>
            <el-date-picker
              v-model="formData.nosaledate"
              type="datetime"
              placeholder="請選擇下架日期時間"
              value-format="yyyy-MM-dd HH:mm:ss"
              class="form-margin"
              @change="end"
            />
          </div>
        </el-form-item>
        <el-form-item label="內容" :label-width="formLabelWidth">
          <el-input
            v-model="formData.content"
            type="textarea"
            :rows="6"
            placeholder="請輸入公告內容"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button v-if="title===`新增公告`" type="primary" @click="createBulletin">建 立</el-button>
        <el-button v-if="title===`編輯公告`" type="primary" @click="updateBulletin">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import moment from 'moment'
import { createBulletin, updateBulletin } from '@/api/announcement'
export default {
  components: {},
  data() {
    return {
      formData: {
        checked: false,
        onsaledate: '',
        nosaledate: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      title: '新增公告'
    }
  },
  methods: {
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.formData = {
        checked: false,
        onsaledate: '',
        nosaledate: ''
      }
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title + '公告'
      //   this.form = {}
      if (title === '編輯') {
        this.formData = Object.assign({}, row)
        this.formData.onsaledate = new Date(this.formData.onsaledate)
        this.formData.nosaledate = new Date(this.formData.nosaledate)
      }
    },
    createBulletin() {
      const formData = new FormData()
      formData.append('title', this.formData.title)
      formData.append('category', this.formData.category)
      formData.append('onsaledate', this.getdatetime(this.formData.onsaledate))
      formData.append('nosaledate', this.getdatetime(this.formData.nosaledate))
      formData.append('content', this.formData.content)
      createBulletin(formData)
        .then((resopnse) => {
          this.$emit('initdata')
          this.handleClose()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateBulletin() {
      const formData = new FormData()
      formData.append('title', this.formData.title)
      formData.append('category', this.formData.category)
      formData.append('onsaledate', this.getdatetime(this.formData.onsaledate))
      formData.append('nosaledate', this.getdatetime(this.formData.nosaledate))
      formData.append('content', this.formData.content)
      formData.append('id', this.formData.id)
      updateBulletin(formData)
        .then((resopnse) => {
          this.$emit('initdata')
          this.dialogFormVisible = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    open(warning) {
      this.$message({
        message: warning,
        type: 'warning' })
    },
    start() {
      if (this.formData.nosaledate !== '' && Number(moment(this.formData.onsaledate)) >= Number(moment(this.formData.nosaledate))) {
        this.open('上架時間必須在下架時間之前')
        this.formData.onsaledate = ''
      }
    },
    end() {
      if (this.formData.onsaledate !== '' && Number(moment(this.formData.onsaledate)) >= Number(moment(this.formData.nosaledate))) {
        this.open('下架時間必須在上架時間之後')
        this.formData.nosaledate = ''
      }
    },
    getdatetime(datetime) {
      return moment(datetime).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin {
  margin-right: 10px;
  margin-bottom: 10px;
}
.icon {
  margin-left: 15px;
  font-size: 20px;
  vertical-align: middle;
  cursor: pointer;
}
</style>

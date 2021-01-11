<template>
  <div>
    <el-dialog :title="title" :before-close="handleClose" :visible.sync="dialogFormVisible" width="50%">
      <el-form ref="ruleForm" :rules="rules" :model="formData">
        <el-form-item prop="title" label="標題" :label-width="formLabelWidth">
          <el-input
            v-model="formData.title"
            autocomplete="off"
            placeholder="請輸入標題"
          />
        </el-form-item>
        <el-form-item prop="category" label="分類" :label-width="formLabelWidth">
          <template v-if="isSelect">
            <el-select v-model="formData.category" placeholder="請選擇分類">
              <el-option label="重要" value="重要" />
              <el-option label="活動" value="活動" />
              <el-option label="維護" value="維護" />
              <el-option label="補償" value="補償" />
              <el-option label="其他" value="其他" />
            </el-select>
          </template>
          <template v-if="!isSelect">
            <el-input
              v-model="formData.category"
              class="category-input"
              placeholder="請輸入類型名稱"
            />
          </template>
          <svg-icon icon-class="form" class="icon" @click="isSelect = !isSelect" />
        </el-form-item>
        <el-form-item prop="onsaleDate" label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.onsaleDate"
            type="datetime"
            placeholder="請選擇上架日期時間"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="form-margin"
            :disabled="checked"
          />
          <el-checkbox v-model="checked" @change="doCheck">立即上架</el-checkbox>
        </el-form-item>
        <el-form-item prop="nosaleDate" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.nosaleDate"
            type="datetime"
            placeholder="請選擇下架日期時間"
            value-format="yyyy-MM-dd HH:mm:ss"
            class="form-margin"
            :picker-options="pickerOptions"
          />
        </el-form-item>
        <el-form-item prop="content" label="內容" :label-width="formLabelWidth">
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
        <el-button v-if="title===`新增公告`" type="primary" @click="createAnnounce">建 立</el-button>
        <el-button v-if="title===`編輯公告`" type="primary" @click="updateAnnounce">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import moment from 'moment'
import { createAnnounce, updateAnnounce } from '@/api/announcement'
import { getToken } from '@/utils/auth'

export default {
  components: {},
  data() {
    return {
      formData: {
        title: '',
        category: '',
        onsaleDate: '',
        nosaleDate: '',
        content: ''
      },
      checked: false,
      dialogFormVisible: false,
      isOnSaleDateError: false,
      isSelect: true,
      formLabelWidth: '80px',
      title: '新增公告',
      rules: {
        title: [
          { required: true, message: '請輸入標題', trigger: 'change' }
        ],
        category: [
          { required: true, message: '請輸入類型名稱', trigger: 'change' }
        ],
        onsaleDate: [
          { required: true, trigger: 'change', validator: this.handleOnSaleDate }
        ],
        nosaleDate: [
          { required: true, trigger: 'change', validator: this.handleNoSaleDate }
        ],
        content: [
          { required: true, message: '請輸入內容', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    pickerOptions() {
      const vm = this
      return {
        disabledDate(time) {
          if (vm.isOnSaleDateError) {
            return false
          }
          return moment(time) < moment(vm.formData.onsaleDate)
        }
      }
    }
  },
  methods: {
    resetFormData() {
      this.formData = {
        title: '',
        category: '',
        onsaleDate: '',
        nosaleDate: '',
        content: ''
      }
      this.isSelect = true
    },
    handleClose(done) {
      this.loading = false
      this.dialogFormVisible = false
      this.checked = false
      this.resetFormData()
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate(Object.keys(this.formData))
      })
    },
    handleOpen(title, row) {
      this.dialogFormVisible = true
      this.title = title + '公告'
      if (title === '編輯') {
        this.formData = Object.assign({}, row)
        this.formData.onsaleDate = new Date(this.formData.onsaleDate)
        this.formData.nosaleDate = new Date(this.formData.nosaleDate)
      }
    },
    handleOnSaleDate(rule, value, callback) {
      if (value && moment(value) > moment(this.formData.nosaleDate)) {
        this.isOnSaleDateError = true
        callback(new Error('請選擇正確的上架日期'))
      } else if (!value) {
        callback(new Error('上架日期不得為空'))
      } else {
        this.isOnSaleDateError = false
        callback()
      }
    },
    handleNoSaleDate(rule, value, callback) {
      if (value && moment(value) < moment(this.formData.onsaleDate)) {
        return callback(new Error('請選擇正確的下架日期'))
      } else if (!value) {
        callback(new Error('下架日期不得為空'))
      } else {
        if (this.formData.onsaleDate) {
          this.$refs['ruleForm'].validateField(['onsaleDate'])
        }
        this.isOnSaleDateError = false
        callback()
      }
    },
    createAnnounce() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('title', this.formData.title)
          formData.append('category', this.formData.category)
          formData.append('onsaleDate', this.getdatetime(this.formData.onsaleDate))
          formData.append('nosaleDate', this.getdatetime(this.formData.nosaleDate))
          formData.append('content', this.formData.content)
          formData.append('token', getToken())
          createAnnounce(formData)
            .then((resopnse) => {
              this.$emit('initdata')
              this.handleClose()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    updateAnnounce() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append('id', this.formData.id)
          formData.append('title', this.formData.title)
          formData.append('category', this.formData.category)
          formData.append('onsaleDate', this.getdatetime(this.formData.onsaleDate))
          formData.append('nosaleDate', this.getdatetime(this.formData.nosaleDate))
          formData.append('content', this.formData.content)
          formData.append('token', getToken())
          updateAnnounce(formData)
            .then((response) => {
              const { data } = response
              if (data.success) {
                this.$emit('initdata')
                this.$message.success(data.msg)
              } else {
                this.$message.warning(data.msg)
              }
              this.dialogFormVisible = false
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    open(warning) {
      this.$message({
        message: warning,
        type: 'warning' })
    },
    getdatetime(datetime) {
      return moment(datetime).valueOf()
    },
    doCheck(e) {
      if (e) {
        this.$set(this.formData, 'onsaleDate', moment().format('YYYY-MM-DD HH:mm:ss'))
      } else {
        this.$set(this.formData, 'onsaleDate', '')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.form-margin {
  margin-right: 10px;
}
.icon {
  margin-left: 15px;
  font-size: 20px;
  vertical-align: middle;
  cursor: pointer;
}
.category-input {
  width: 220px;
}
</style>
